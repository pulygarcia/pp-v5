<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animFrameId: number
let cleanupFn: (() => void) | null = null

onMounted(async () => {
  const THREE = await import('three')
  const { OrbitControls } = await import('three/addons/controls/OrbitControls.js')
  const { EffectComposer } = await import('three/addons/postprocessing/EffectComposer.js')
  const { RenderPass } = await import('three/addons/postprocessing/RenderPass.js')
  const { UnrealBloomPass } = await import('three/addons/postprocessing/UnrealBloomPass.js')

  const canvas = canvasRef.value
  if (!canvas) return

  const COUNT = 20000
  const PARAMS = { radius: 90, tube: 30, speed: 1.5, warp: 2 }

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x000000, 0.01)

  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 2000)
  camera.position.set(0, 0, 100)

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas, powerPreference: 'high-performance', alpha: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.autoRotate = true
  controls.autoRotateSpeed = 1.5
  controls.enableZoom = false
  controls.enablePan = false

  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
    1.8, 0.4, 0
  )
  composer.addPass(bloomPass)

  const geometry = new THREE.TetrahedronGeometry(0.25)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const instancedMesh = new THREE.InstancedMesh(geometry, material, COUNT)
  instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
  scene.add(instancedMesh)

  const positions: THREE.Vector3[] = []
  const color = new THREE.Color()
  const dummy = new THREE.Object3D()
  const target = new THREE.Vector3()

  for (let i = 0; i < COUNT; i++) {
    positions.push(new THREE.Vector3(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    ))
    instancedMesh.setColorAt(i, color.setHex(0x00ff88))
  }

  const clock = new THREE.Clock()

  function animate() {
    animFrameId = requestAnimationFrame(animate)
    const time = clock.getElapsedTime()
    controls.update()

    for (let i = 0; i < COUNT; i++) {
      const t = time * PARAMS.speed
      const p = i / COUNT
      const a = p * Math.PI * 2.0 * 20.0
      const b = (i % 200) / 200 * Math.PI * 2.0
      const cosA = Math.cos(a), sinA = Math.sin(a)
      const cosB = Math.cos(b), sinB = Math.sin(b)
      const w = Math.sin(a * 0.5 + t) * PARAMS.warp + Math.cos(b * 2.0 + t) * PARAMS.warp * 0.5
      const r = PARAMS.radius + PARAMS.tube * cosB + w
      target.set(r * cosA, PARAMS.tube * sinB + Math.sin(a + t) * PARAMS.warp * 5.0, r * sinA)
      const hue = (p + t * 0.1) % 1
      const light = 0.45 + 0.25 * Math.sin(a + t)
      color.setHSL(hue, 1.0, light)

      positions[i].lerp(target, 0.1)
      dummy.position.copy(positions[i])
      dummy.updateMatrix()
      instancedMesh.setMatrixAt(i, dummy.matrix)
      instancedMesh.setColorAt(i, color)
    }

    instancedMesh.instanceMatrix.needsUpdate = true
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true
    composer.render()
  }

  animate()

  const onResize = () => {
    if (!canvas) return
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    composer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  cleanupFn = () => {
    cancelAnimationFrame(animFrameId)
    window.removeEventListener('resize', onResize)
    renderer.dispose()
  }
})

onBeforeUnmount(() => cleanupFn?.())
</script>

<template>
  <canvas ref="canvasRef" class="h-full w-full" />
</template>

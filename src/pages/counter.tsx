import { Button } from '@heroui/react'
import { useStore } from 'valtio-define'

function Page() {
  const { count, doubleCount } = useStore(store.counter)

  return (
    <div className="flex-1 items-center justify-center gap-4 p-4">
      <span>
        Counter:
        {count}
      </span>
      <span>
        Double Count:
        {doubleCount}
      </span>
      <div className="flex-row gap-2">
        <Button onPress={() => store.counter.increment()}>
          <span>Increment</span>
        </Button>
        <Button onPress={() => store.counter.decrement()}>
          <span>Decrement</span>
        </Button>
      </div>
    </div>
  )
}

export default Page

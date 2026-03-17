import { HeroUIProvider } from '@heroui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/config/client'
import '@/style/index.css'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider navigate={useNavigate()} useHref={useHref}>
        {children}
      </HeroUIProvider>
    </QueryClientProvider>
  )
}

import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom';
import routes from '../../routes'
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Main() {
  const element = useRoutes(routes)
  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<></>}>
          {/* 注册路由 */}
          { element }
        </Suspense>
      </ErrorBoundary>


    </main>
  )
}

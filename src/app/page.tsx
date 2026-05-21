import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Edge Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive Job Management System for Edge Exterior
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Admin Hub</h3>
              <p className="text-gray-600 text-sm mb-4">
                Manage jobs, quotes, invoices, and team members
              </p>
              <Link href="/dashboard">
                <Button variant="primary" className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Field Hub</h3>
              <p className="text-gray-600 text-sm mb-4">
                Track time, measurements, and job progress
              </p>
              <Link href="/field">
                <Button variant="secondary" className="w-full">
                  Field Access
                </Button>
              </Link>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Portal</h3>
              <p className="text-gray-600 text-sm mb-4">
                View job progress, documents, and photos
              </p>
              <Link href="/portal">
                <Button variant="outline" className="w-full">
                  Client Login
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Built with Next.js, TypeScript, Tailwind CSS, and Supabase</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to Edge Platform Admin Hub</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">5</div>
            <div className="text-sm text-gray-600">Pending Quotes</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">$45,230</div>
            <div className="text-sm text-gray-600">Revenue This Month</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">8</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Jobs</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-medium">Deck Installation - Smith Residence</div>
                <div className="text-sm text-gray-600">Started 2 days ago</div>
              </div>
              <Badge variant="info">In Progress</Badge>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div>
                <div className="font-medium">Fence Repair - Johnson Property</div>
                <div className="text-sm text-gray-600">Started 1 week ago</div>
              </div>
              <Badge variant="warning">Pending Materials</Badge>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <div className="font-medium">Pergola Build - Williams Home</div>
                <div className="text-sm text-gray-600">Completed yesterday</div>
              </div>
              <Badge variant="success">Completed</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

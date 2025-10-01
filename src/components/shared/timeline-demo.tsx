'use client';

import React from 'react';
import { Timeline, TimelineItem } from '@/components/ui/timeline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Hammer, CheckCircle, Truck } from 'lucide-react';

// Example timeline data for eco-house project
const projectTimelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'Design Phase',
    description: 'Architectural planning and eco-friendly design specifications completed',
    date: 'Jan 15, 2024',
    status: 'completed',
    icon: <Building className="h-4 w-4" />,
  },
  {
    id: '2',
    title: 'Permits & Approvals',
    description: 'Building permits obtained and environmental compliance verified',
    date: 'Feb 10, 2024',
    status: 'completed',
    icon: <CheckCircle className="h-4 w-4" />,
  },
  {
    id: '3',
    title: 'Foundation & Structure',
    description: 'Foundation laying and main structural work in progress',
    date: 'Mar 1, 2024',
    status: 'current',
    icon: <Hammer className="h-4 w-4" />,
  },
  {
    id: '4',
    title: 'Eco Systems Installation',
    description: 'Solar panels, rainwater harvesting, and insulation installation',
    date: 'Apr 15, 2024',
    status: 'pending',
  },
  {
    id: '5',
    title: 'Final Inspection',
    description: 'Quality assurance and handover to client',
    date: 'May 30, 2024',
    status: 'pending',
  },
];

const orderTrackingData: TimelineItem[] = [
  {
    id: 'order-1',
    title: 'Order Confirmed',
    description: 'Your eco-house plan order has been confirmed',
    date: '2 hours ago',
    status: 'completed',
  },
  {
    id: 'order-2',
    title: 'Processing',
    description: 'Preparing your custom design documents',
    date: 'Current',
    status: 'current',
  },
  {
    id: 'order-3',
    title: 'Ready for Delivery',
    description: 'Plans will be sent to your email',
    date: 'Estimated: 2-3 days',
    status: 'pending',
  },
];

export function TimelineDemo() {
  return (
    <div className="space-y-8 p-6">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Vertical Timeline Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Project Timeline
            </CardTitle>
            <CardDescription>Track the progress of your eco-house construction project</CardDescription>
          </CardHeader>
          <CardContent>
            <Timeline items={projectTimelineData} orientation="vertical" variant="default" />
          </CardContent>
        </Card>

        {/* Compact Timeline Example */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Order Status
            </CardTitle>
            <CardDescription>Track your eco-house plan delivery status</CardDescription>
          </CardHeader>
          <CardContent>
            <Timeline items={orderTrackingData} orientation="vertical" variant="compact" />
          </CardContent>
        </Card>
      </div>

      {/* Horizontal Timeline Example */}
      <Card>
        <CardHeader>
          <CardTitle>Project Phases Overview</CardTitle>
          <CardDescription>Horizontal timeline showing major project milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <Timeline items={projectTimelineData} orientation="horizontal" variant="default" className="min-h-24" />
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Timeline Variants</CardTitle>
          <CardDescription>Different styles and configurations available</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="mb-2 text-sm font-medium text-muted-foreground">No Connectors</div>
            <Timeline
              items={orderTrackingData.slice(0, 3)}
              orientation="vertical"
              showConnectors={false}
              variant="compact"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TimelineDemo;

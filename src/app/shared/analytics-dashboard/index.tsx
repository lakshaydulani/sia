import WebsiteMetrics from '@/app/shared/analytics-dashboard/website-metrics/table-widget';
import AccountRetention from '@/app/shared/analytics-dashboard/account-retention';
import Acquisition from '@/app/shared/analytics-dashboard/acquisition';
import ConversionRates from '@/app/shared/analytics-dashboard/conversion-rates';
import DeviceSessions from '@/app/shared/analytics-dashboard/device-sessions';
import GoalAccomplished from '@/app/shared/analytics-dashboard/goal-accomplished';
import StatCards from '@/app/shared/analytics-dashboard/stat-cards';
import EnquiriesSource from '@/app/shared/analytics-dashboard/enquiries-source';
import UserMetrics from '@/app/shared/analytics-dashboard/user-metrics';
import PageMetrics from '@/app/shared/analytics-dashboard/page-metric/table-widget';
import SalesFunnel from '@/app/shared/analytics-dashboard/sales-funnel';
import Sales from '@/app/shared/analytics-dashboard/sales';
import MonthlySalesGrowth from '@/app/shared/analytics-dashboard/monthly-sales-growth';
import WelcomeBanner from '@/components/banners/welcome';

export default function AnalyticsDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
      <WelcomeBanner
          title={
            <>
              Good Morning, Lakshay San
            </>
          }
          description='Here’s what’s happening with your business today.'
          // contentClassName="@2xl:max-w-[calc(100%-340px)]"
          className="border border-gray-800 bg-gray-0 pb-8 @4xl:col-span-2 @7xl:col-span-12 dark:bg-gray-100/30 lg:pb-9"
        >
        </WelcomeBanner>
        <StatCards className="grid-cols-1 @xl:grid-cols-2 @4xl:col-span-2 @6xl:grid-cols-4 @7xl:col-span-12" />

        <Sales className="@4xl:col-span-2 @7xl:col-span-12" />

        {/* col-span-full @4xl:col-span-6 @7xl:col-span-4 @7xl:[&_.recharts-responsive-container]:!w-11/12 @[88rem]:[&_.recharts-responsive-container]:!w-full */}
        <SalesFunnel className="col-span-full @4xl:col-span-6 @7xl:col-span-4 @7xl:[&_.recharts-responsive-container]:!w-11/12 @[88rem]:[&_.recharts-responsive-container]:!w-full" />

        
        {/* <DeviceSessions className="@7xl:col-span-4" /> */}

        <EnquiriesSource className="@7xl:col-span-4" />

        <MonthlySalesGrowth className="@4xl:col-span-4 @7xl:col-span-4" />


        <ConversionRates className="@7xl:col-span-6 @[90rem]:col-span-7 @[112rem]:col-span-8" />

        <GoalAccomplished className="@4xl:col-start-2 @4xl:row-start-3 @7xl:col-span-6 @7xl:col-start-auto @7xl:row-start-auto @[90rem]:col-span-5 @[112rem]:col-span-4" />

        <PageMetrics className="@4xl:col-span-2 @4xl:row-start-5 @7xl:col-span-12 @7xl:row-start-auto @[90rem]:col-span-7 @[112rem]:col-span-8" />

        <AccountRetention className="@7xl:col-span-12 @[90rem]:col-span-5 @[112rem]:col-span-4" />

        <WebsiteMetrics className="@4xl:col-span-2 @7xl:col-span-12" />
      </div>
    </div>
  );
}

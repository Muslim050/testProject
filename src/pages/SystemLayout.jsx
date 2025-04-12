import {Button} from '@/components/ui/button.jsx'
import { CircleUser } from 'lucide-react'
import {
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable.jsx'
import {
  TooltipProvider,
} from '@/components/ui/tooltip.jsx'
import Cookies from 'js-cookie'
import React from 'react'
import { ThemeContext } from '@/utils/ThemeContext.jsx'
import getTitle  from '../components/module/Sidebar/MenuItems.js'
import { Outlet, useLocation } from 'react-router-dom'
import SidebarNew from "@/components/module/Sidebar/SidebarNew.jsx";


const SystemLayout = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true)
  const { bgColor, textColor } = React.useContext(ThemeContext)
  const route = useLocation().pathname.split('/').slice(1)
  const title = route[0]
  const id = route[1]
  const transformedTitle = getTitle(title, id)

  const username = Cookies.get('username')
  const user = Cookies.get('role')
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"

        style={{
          display: 'flex',
          backgroundColor: bgColor,
          color: textColor,
        }}
        className="!h-screen items-stretch sm:p-[14px] p-0 flex flex-col sm:gap-0 gap-2"
      >
        <SidebarNew isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        {/*<ResizableHandle withHandle />*/}
        <ResizablePanel
          defaultSize={20}
          minSize={30}
          className="sm:pl-[20px] pl-0 h-screen space-y-4 overflow-hidden"
        >
          <div className="h-full flex flex-col ">

            <div
              className="border_container glass-background border_design flex justify-between items-center px-4 py-2 ">
              <h1 className="sm:text-lg text-xs font-bold">{transformedTitle}</h1>
              <div className="flex items-center gap-4 ">
                <div>
                  <div
                    className="text-white text-xs	"
                    style={{color: textColor}}
                  >
                    Логин: &nbsp;
                    {username}
                  </div>

                  <div
                    className="text-white text-xs	"
                    style={{color: textColor}}
                  >
                    Роль: &nbsp;
                    {(user === 'admin' && 'Менеджер') ||
                      (user === 'channel' && 'Канал') ||
                      (user === 'advertiser' && 'Рекламодатель') ||
                      (user === 'publisher' && 'Паблишер') ||
                      (user === 'advertising_agency' && 'Рекламное агентство')}
                  </div>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full w-8 h-8"
                >
                  <CircleUser className="size-4"/>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </div>
            </div>

            <div className="flex-1 h-full">
              <Outlet/>
            </div>
          </div>

        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}

export default SystemLayout

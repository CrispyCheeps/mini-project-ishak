import { AppSidebar } from "@/components/app-sidebar";
import { SidebarContext } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const BerandaPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="text-2xl font-bold text-center">Welcome!!</h1>
    </div>
  );
};

export default BerandaPage;

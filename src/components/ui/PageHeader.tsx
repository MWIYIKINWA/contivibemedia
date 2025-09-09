import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  breadcrumbs: { name: string; href?: string }[];
  backgroundImage?: string;
}

const PageHeader = ({ title, breadcrumbs, backgroundImage }: PageHeaderProps) => {
  return (
    <div className="relative h-80 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
   <div className="relative z-10 flex flex-col items-center justify-center text-center text-white mt-10 gap-3 font-roboto">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">{title}</h1>

  {/* Breadcrumbs */}
  <Breadcrumb className="justify-center">
    <BreadcrumbList className="text-white/80 flex flex-wrap justify-center gap-1">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.name} className="flex items-center">
          <BreadcrumbItem>
            {breadcrumb.href ? (
              <BreadcrumbLink asChild>
                <Link 
                  to={breadcrumb.href} 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage className="text-white font-medium">
                {breadcrumb.name}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {index < breadcrumbs.length - 1 && (
            <BreadcrumbSeparator className="text-white/60" />
          )}
        </div>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
</div>

    </div>
  );
};

export default PageHeader;
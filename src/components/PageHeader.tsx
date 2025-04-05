
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  onAdd?: () => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  addButtonText?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  onAdd,
  onRefresh,
  isRefreshing = false,
  addButtonText = "Ajouter",
  children
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        {description && <p className="text-gray-500 mt-1">{description}</p>}
      </div>
      
      <div className="flex gap-2 mt-2 sm:mt-0">
        {onRefresh && (
          <Button 
            onClick={onRefresh} 
            variant="outline" 
            disabled={isRefreshing}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Actualiser
          </Button>
        )}
        
        {onAdd && (
          <Button onClick={onAdd} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            {addButtonText}
          </Button>
        )}
        
        {children}
      </div>
    </div>
  );
};

export default PageHeader;

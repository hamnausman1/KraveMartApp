import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/categoryProducts';

export type OrderStage = 'confirmed' | 'packaging' | 'dispatched' | 'delivered';

export interface DeliveryRider {
  name: string;
  phone: string;
  photo: string;
}

export interface Order {
  id: string;
  date: string;
  time: string;
  total: number;
  deliveryCharge: number;
  subtotal: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  stage?: OrderStage; // Current stage of active orders
  estimatedDeliveryTime?: string; // e.g., "50 - 60 mins" or "25 mins"
  scheduledTime?: string; // e.g., "6:30 pm"
  paymentMethod: string;
  deliveryAddress: string;
  deliveryRider?: DeliveryRider; // Present when order is dispatched
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id'>) => string;
  getOrderById: (id: string) => Order | undefined;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  updateOrderStage: (id: string, stage: OrderStage) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (orderData: Omit<Order, 'id'>): string => {
    const newOrderId = `ORD${Date.now().toString().slice(-8)}`;
    const newOrder: Order = {
      ...orderData,
      id: newOrderId,
      // Set initial stage and times for new orders
      stage: 'confirmed',
      estimatedDeliveryTime: '50 - 60 mins',
      scheduledTime: new Date(Date.now() + 60 * 60 * 1000).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrderId;
  };

  const getOrderById = (id: string): Order | undefined => {
    return orders.find(order => order.id === id);
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const updateOrderStage = (id: string, stage: OrderStage) => {
    setOrders(prev =>
      prev.map(order => {
        if (order.id === id) {
          const updates: Partial<Order> = { stage };
          
          // Update estimated delivery time based on stage
          switch (stage) {
            case 'packaging':
              updates.estimatedDeliveryTime = '30 - 40 mins';
              break;
            case 'dispatched':
              updates.estimatedDeliveryTime = '25 mins';
              // Add delivery rider info when dispatched
              updates.deliveryRider = {
                name: 'Ali Irfan',
                phone: '0345-2196268',
                photo: 'https://i.pravatar.cc/150?img=12',
              };
              break;
            case 'delivered':
              updates.estimatedDeliveryTime = 'Delivered';
              break;
          }
          
          return { ...order, ...updates };
        }
        return order;
      })
    );
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, getOrderById, updateOrderStatus, updateOrderStage }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within OrderProvider');
  }
  return context;
}
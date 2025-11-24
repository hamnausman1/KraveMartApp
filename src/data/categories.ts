export interface Category {
  id: string;
  name: string;
  image?: string;
  imageStyle?: string;
}

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Fruits & Vegetables',
    image: 'https://images.unsplash.com/photo-1748968218227-0d1951551255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYzOTc3MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-2',
    name: 'Snacks & Confectioneries',
    image: 'https://images.unsplash.com/photo-1599629974232-2365495b9ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFja3MlMjBjaGlwcyUyMGNvb2tpZXN8ZW58MXx8fHwxNzYzOTc3MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-3',
    name: 'Dairy & Bakery',
    image: 'https://images.unsplash.com/photo-1741522226997-a34b5a45c648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMG1pbGslMjBjaGVlc2V8ZW58MXx8fHwxNzYzODg3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-4',
    name: 'Beverages',
    image: 'https://images.unsplash.com/photo-1739138056344-3c852f4efc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXZlcmFnZXMlMjBkcmlua3MlMjBqdWljZXxlbnwxfHx8fDE3NjM5NzcyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-5',
    name: 'Cooking Essentials',
    image: 'https://images.unsplash.com/photo-1669358839964-60f3e7655f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwc3BpY2VzfGVufDF8fHx8MTc2MzkxNDg1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-6',
    name: 'Household Items',
    image: 'https://images.unsplash.com/photo-1758887262204-a49092d85f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZWhvbGQlMjBjbGVhbmluZyUyMHByb2R1Y3RzfGVufDF8fHx8MTc2Mzg5NjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-7',
    name: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1641677914790-bc9e2bc8e5e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGNhcmUlMjBjb3NtZXRpY3N8ZW58MXx8fHwxNzYzOTc3MjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-8',
    name: 'Frozen Food',
    image: 'https://images.unsplash.com/photo-1651383140368-9b3ee59c2981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm96ZW4lMjBmb29kfGVufDF8fHx8MTc2MzkwMTE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-9',
    name: 'Cleaning & Laundry',
    image: 'https://images.unsplash.com/photo-1758887262204-a49092d85f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZWhvbGQlMjBjbGVhbmluZyUyMHByb2R1Y3RzfGVufDF8fHx8MTc2Mzg5NjU2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-10',
    name: 'Meat & Fish',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwZmlzaCUyMGJ1dGNoZXJ8ZW58MXx8fHwxNzYzOTIxNjE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
  {
    id: 'cat-11',
    name: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBmb29kfGVufDF8fHx8MTc2MzkyMTY0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageStyle: 'w-full h-full object-cover rounded-lg',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

export function getCategoryByName(name: string): Category | undefined {
  return categories.find(cat => cat.name === name);
}

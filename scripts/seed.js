const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const designers = [
  {
    name: 'Sabyasachi Mukherjee',
    bio: 'Sabyasachi is one of India\'s most renowned luxury fashion designers.',
    commission_percentage: 12,
    founded_year: 1999,
  },
  {
    name: 'Manish Malhotra',
    bio: 'India\'s master of bridal couture and celebrity wear.',
    commission_percentage: 15,
    founded_year: 1997,
  },
  {
    name: 'Tarun Tahiliani',
    bio: 'Pioneer of contemporary Indian fashion with global appeal.',
    commission_percentage: 10,
    founded_year: 1988,
  },
  {
    name: 'Anita Dongre',
    bio: 'Creator of timeless, sustainable luxury Indian fashion.',
    commission_percentage: 12,
    founded_year: 1989,
  },
  {
    name: 'Payal Singhal',
    bio: 'Designer of intricate embroidery and contemporary luxury wear.',
    commission_percentage: 11,
    founded_year: 2000,
  },
  {
    name: 'Amit Aggarwal',
    bio: 'Known for draping techniques and innovative silhouettes.',
    commission_percentage: 13,
    founded_year: 2002,
  },
  {
    name: 'Varun Bahl',
    bio: 'Master of color and textile in Indian couture.',
    commission_percentage: 12,
    founded_year: 2005,
  },
  {
    name: 'JJ Valaya',
    bio: 'Luxury heritage brand with royal connections.',
    commission_percentage: 14,
    founded_year: 1987,
  },
  {
    name: 'Isha Jaywant',
    bio: 'Contemporary take on traditional Indian wear.',
    commission_percentage: 11,
    founded_year: 2010,
  },
  {
    name: 'Rohit Bal',
    bio: 'Iconic Indian fashion designer known for elaborate embroidery.',
    commission_percentage: 13,
    founded_year: 1990,
  },
];

const categories = ['Lehenga', 'Saree', 'Suit', 'Gown', 'Pret', 'Anarkali', 'Sharara', 'Fusion'];
const occasions = ['Wedding', 'Engagement', 'Reception', 'Party', 'Casual'];
const colors = ['Red', 'Gold', 'Pink', 'Maroon', 'Green', 'Blue', 'Cream', 'Peach', 'Purple', 'Black'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const productNames = [
  'Embroidered Lehenga',
  'Silk Saree',
  'Designer Anarkali',
  'Bridal Sharara',
  'Pret Suit',
  'Evening Gown',
  'Party Lehenga',
  'Wedding Saree',
  'Fusion Dress',
  'Ethnic Top',
  'Embroidered Dupatta',
  'Classic Saree',
  'Tulle Lehenga',
  'Silk Gown',
  'Designer Suit',
];

async function seed() {
  try {
    console.log('🌱 Starting database seeding...');

    // Seed designers
    console.log('📍 Seeding designers...');
    const { data: designerData, error: designerError } = await supabase
      .from('designers')
      .insert(designers)
      .select();

    if (designerError) {
      console.error('Error seeding designers:', designerError);
      return;
    }

    console.log(`✅ Added ${designerData.length} designers`);

    // Seed products
    console.log('📍 Seeding products...');
    const products = [];

    for (let i = 0; i < 100; i++) {
      const designer = designerData[i % designerData.length];
      const price = Math.floor(Math.random() * 4000) + 1000;
      const mrp = Math.floor(price * 1.4);

      products.push({
        designer_id: designer.id,
        name: `${productNames[i % productNames.length]} ${i + 1}`,
        description: `Exquisite designer piece by ${designer.name}. Crafted with finest materials and meticulous attention to detail.`,
        sku: `SKU${String(i + 1).padStart(5, '0')}`,
        category: categories[i % categories.length],
        gender: i % 2 === 0 ? 'women' : 'men',
        mrp: mrp,
        selling_price: price,
        cost_price: Math.floor(price * 0.5),
        images: [
          `/images/products/product${(i % 4) + 1}.jpg`,
          `/images/products/product${((i + 1) % 4) + 1}.jpg`,
        ],
        fabric: ['Pure Silk', 'Georgette', 'Chiffon', 'Cotton', 'Crepe'][i % 5],
        embroidery: ['Zardozi', 'Resham', 'Pearl', 'Beadwork', 'Gold Thread'][i % 5],
        care_instructions: 'Dry clean only. Store in cool, dry place.',
        occasion: occasions[i % occasions.length],
        delivery_days: [3, 5, 7, 10][i % 4],
      });
    }

    const { data: productData, error: productError } = await supabase
      .from('products')
      .insert(products)
      .select();

    if (productError) {
      console.error('Error seeding products:', productError);
      return;
    }

    console.log(`✅ Added ${productData.length} products`);

    // Seed inventory
    console.log('📍 Seeding inventory...');
    const inventory = [];

    for (const product of productData) {
      for (let sizeIdx = 0; sizeIdx < 3; sizeIdx++) {
        for (let colorIdx = 0; colorIdx < 2; colorIdx++) {
          inventory.push({
            product_id: product.id,
            size: sizes[sizeIdx],
            color: colors[colorIdx],
            stock: Math.floor(Math.random() * 20) + 1,
          });
        }
      }
    }

    const { data: inventoryData, error: inventoryError } = await supabase
      .from('inventory')
      .insert(inventory)
      .select();

    if (inventoryError) {
      console.error('Error seeding inventory:', inventoryError);
      return;
    }

    console.log(`✅ Added ${inventoryData.length} inventory items`);

    // Seed categories
    console.log('📍 Seeding categories...');
    const categoryData = categories.map((cat) => ({
      name: cat,
      slug: cat.toLowerCase(),
      description: `Explore our collection of ${cat}`,
    }));

    const { data: catData, error: catError } = await supabase
      .from('categories')
      .insert(categoryData)
      .select();

    if (catError) {
      console.error('Error seeding categories:', catError);
      return;
    }

    console.log(`✅ Added ${catData.length} categories`);

    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seed();

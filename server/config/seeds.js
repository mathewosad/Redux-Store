const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Produce' },
    { name: 'Home goods' },
    { name: 'Appliances' },
    { name: 'Library' },
    { name: 'Kids Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Buy some cookies and get a free cookie',
      description:
        'Made with love by our friends at CookieMonsterInc, this is a great way to get some cookies for your kids. We love cookies and we love our friends!',
      image: 'cookies.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 250
    },
    {
      name: 'Freshly made Coffee ',
      description:
        'Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. Coffee is brewed by diluting a large amount of nearly boiling water with the roasted coffee beans.',
      image: 'coffee.jpg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 450
    },
    {
      name: 'Tissue Paper',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'tissue-paper.jpg',
      price: 50.99,
      quantity: 90
    },
    {
      name: 'Hand Soap',
      category: categories[1]._id,
      description:
        'Handsoap is a liquid soap used for washing hands. It is made from a mixture of natural oils and synthetic oils. It is used for cleaning hands, and is used in the home as a cleaning product.',
      image: 'Hand-soap.jpg',
      price: 6.99,
      quantity: 69
    },
    {
      name: 'Spoons with Grains',
      category: categories[1]._id,
      description:
        'Spoons with grains are a type of kitchen utensil that are used for eating and cooking. They are made from a metal or plastic spoons with a grain in the bottom of the spoon. They are used for eating and cooking.',
      image: 'spoons.jpg',
      price: 10.99,
      quantity: 69
    },
    {
      name: 'Dope Camera',
      category: categories[2]._id,
      description:
        'The Dope Camera is a camera that is used for taking pictures. It is a camera that is used for taking pictures. It is a camera that is used for taking pictures. It is a camera that is used for taking pictures.',
      image: 'cool-cam.jpg',
      price: 999.99,
      quantity: 96
    },
    {
      name: 'Ipad Pro',
      category: categories[2]._id,
      description:
        'The Ipad Pro is a tablet computer that is used for taking pictures. It is a tablet computer that is used for taking pictures. It is a tablet computer that is used for taking pictures. It is a tablet computer that is used for taking pictures.',
      image: 'tablet-ipad.jpg',
      price: 229.99,
      quantity: 19
    },
    {
      name: 'Library',
      category: categories[3]._id,
      description:
        'The Library is a book that is used for taking pictures. It is a book that is used for taking pictures. It is a book that is used for taking pictures. It is a book that is used for taking pictures.',
      image: 'book.jpg',
      price: 14.99,
      quantity: 96
    },
    {
      name: 'Spinning Toy',
      category: categories[4]._id,
      description: 'Spinning Toy is a toy that is used for taking pictures.',
      image: 'Spinner.jpg',
      price: 5.99,
      quantity: 999
    },
    {
      name: 'Kids toy Horse',
      category: categories[4]._id,
      description:
        'Kids toy Horse is a toy that is used for taking pictures. It is a toy that is used for taking pictures. It is a toy that is used for taking pictures. It is a toy that is used for taking pictures.',
      image: 'Kids-horse.jpg',
      price: 1.99,
      quantity: 450
    },
    {
      name: 'Glowing Teddy Bear',
      category: categories[4]._id,
      description:
        'Glowing Teddy Bear is a toy that is used for taking pictures. It is a toy that is used for taking pictures. It is a toy that is used for taking pictures. It is a toy that is used for taking pictures.',
      image: 'glowing-teddy.jpg',
      price: 9.99,
      quantity: 66
    },
    {
      name: 'Study Table',
      category: categories[4]._id,
      description:
        'Study Table is a toy that is used for taking pictures. It is a toy that is used for taking pictures. It is a toy that is used for taking pictures. It is a toy that is used for taking pictures.',
      image: 'a-study.jpg',
      price: 6.99,
      quantity: 250
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Ryan',
    lastName: 'Spicer',
    email: 'Spicera@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Michael',
    lastName: 'Spicy',
    email: 'Spicy@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

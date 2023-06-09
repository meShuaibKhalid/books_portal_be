const Book = require('./../models/book-model');
const router = require('express').Router();
const Sequelize = require('sequelize');
const e = require('express');

router.post('/addBook', async (req, res) => {
        try {
                const book = await Book.create({
                        image: req.body.image,
                        title: req.body.title,
                        contact: req.body.contact,
                        phone: req.body.phone,
                        email: req.body.email,
                        abstract: req.body.abstract,
                        author: req.body.author,
                        publish_date: req.body.publish_date,
                        category: req.body.category,
                });

                return res.status(200).json({ msg: `${book.title} has been added successfully` });
        } catch (error) {
                console.error(error);
                return res.status(500).json({ error: error });
        }
});


router.get('/getBooks', async (req, res) => {
        try {
                const books = await Book.findAll();

                if (!books?.length) {
                        return res.status(404).json({ error: 'No Books found' });
                }
                return res.status(200).json(books);
        } catch (error) {
                console.error(error);
                return res.status(500).json({ error: error });
        }
});

router.get('/getBook/:id', async (req, res) => {
        const id = req.params.id;
        try {
                const book = await Book.findOne({ where: { id: id } });
                if (!book) {
                        return res.status(404).json({ error: 'Book not found' });
                }
                return res.status(200).json(book);
        } catch (error) {
                console.error(error);
                return res.status(500).json({ error: error });
        }
});


router.patch('/changeBook/:id', (req, res)=>{
        Book.findOne({where: {ID: req.params.id}}).then((book)=>{
                console.log('book: ', book);
              if (book.status == 'available' && book.borrowedBy == null || !book.borrowedBy.length) 
              { book.status = 'not available';
               book.borrowedBy = req.body.email;}
               else if (book.status == 'not available' && req.body.email == book.borrowedBy) {
                       book.status = 'available';
                       book.borrowedBy = null;
               }
               else {return res.json({success: false}); }
                book.save();
               return res.status(200).json({book: book, success: true})}).catch((err)=>{return res.status(500).send(err);});
});

module.exports = router;
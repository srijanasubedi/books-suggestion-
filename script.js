const books = [

    {
        title:"Atomic Habits",
        category:["motivation","self help","productivity"],
        author:"James Clear",
        country:"USA",
        image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
        description:"A powerful self-improvement book."
    },

    {
        title:"Harry Potter",
        category:["fantasy","magic","adventure"],
        author:"J.K. Rowling",
        country:"United Kingdom",
        image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000&auto=format&fit=crop",
        description:"A magical fantasy adventure."
    },

    {
        title:"Introduction to Algorithms",
        category:["computer","programming","coding","algorithm"],
        author:"Thomas H. Cormen",
        country:"USA",
        image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
        description:"Best book for learning algorithms and data structures."
    },

    {
        title:"A Brief History of Time",
        category:["science","physics","space"],
        author:"Stephen Hawking",
        country:"United Kingdom",
        image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
        description:"Famous science book about the universe."
    },

    {
        title:"Higher Engineering Mathematics",
        category:["math","engineering","calculus"],
        author:"B.S. Grewal",
        country:"India",
        image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
        description:"Popular mathematics book for students."
    },

    {
        title:"Muna Madan",
        category:["nepali","literature","poetry"],
        author:"Laxmi Prasad Devkota",
        country:"Nepal",
        image:"https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop",
        description:"Famous Nepali literary masterpiece."
    },

    {
        title:"Palpasa Cafe",
        category:["nepali","novel","war"],
        author:"Narayan Wagle",
        country:"Nepal",
        image:"https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=1000&auto=format&fit=crop",
        description:"Popular Nepali novel based on conflict and society."
    },
    {
    title: "The Silent Patient",
    category: ["crime", "thriller", "mystery"],
    author: "Alex Michaelides",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
    description: "A psychological thriller full of suspense and shocking twists."
},

{
    title: "It Ends With Us",
    category: ["romance", "drama", "fiction"],
    author: "Colleen Hoover",
    country: "USA",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000&auto=format&fit=crop",
    description: "One of the most popular romantic novels in recent years."
},

{
    title: "The Da Vinci Code",
    category: ["crime", "thriller", "mystery"],
    author: "Dan Brown",
    country: "USA",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000&auto=format&fit=crop",
    description: "A thrilling mystery involving secret societies and hidden codes."
},

{
    title: "Rich Dad Poor Dad",
    category: ["finance", "motivation", "business"],
    author: "Robert Kiyosaki",
    country: "USA",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
    description: "A famous book about money, investment, and financial freedom."
},

{
    title: "Think and Grow Rich",
    category: ["motivation", "success", "business"],
    author: "Napoleon Hill",
    country: "USA",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop",
    description: "A classic motivational book for success and personal growth."
},

{
    title: "The Psychology of Money",
    category: ["finance", "psychology", "money"],
    author: "Morgan Housel",
    country: "USA",
    image: "https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=1000&auto=format&fit=crop",
    description: "Explains how human behavior affects financial decisions."
},

{
    title: "Pride and Prejudice",
    category: ["romance", "classic", "literature"],
    author: "Jane Austen",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=1000&auto=format&fit=crop",
    description: "One of the greatest romantic novels ever written."
},

{
    title: "The Fault in Our Stars",
    category: ["romance", "drama", "fiction"],
    author: "John Green",
    country: "USA",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
    description: "An emotional love story loved by millions of readers."
},

{
    title: "Sherlock Holmes",
    category: ["crime", "detective", "mystery"],
    author: "Arthur Conan Doyle",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
    description: "Classic detective stories featuring Sherlock Holmes."
},

{
    title: "Gone Girl",
    category: ["crime", "thriller", "mystery"],
    author: "Gillian Flynn",
    country: "USA",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    description: "A bestselling psychological crime thriller."
},

{
    title: "Dune",
    category: ["science fiction", "fantasy", "adventure"],
    author: "Frank Herbert",
    country: "USA",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    description: "A legendary science fiction masterpiece."
},

{
    title: "The Hobbit",
    category: ["fantasy", "adventure", "fiction"],
    author: "J.R.R. Tolkien",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
    description: "A magical fantasy journey through Middle-earth."
},

{
    title: "1984",
    category: ["fiction", "science fiction", "political"],
    author: "George Orwell",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000&auto=format&fit=crop",
    description: "A famous dystopian novel about surveillance and freedom."
},

{
    title: "To Kill a Mockingbird",
    category: ["classic", "literature", "drama"],
    author: "Harper Lee",
    country: "USA",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000&auto=format&fit=crop",
    description: "A timeless novel about justice and humanity."
},

{
    title: "The Kite Runner",
    category: ["drama", "historical", "fiction"],
    author: "Khaled Hosseini",
    country: "Afghanistan",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
    description: "An emotional and powerful story of friendship and redemption."
},

{
    title: "Ikigai",
    category: ["motivation", "self help", "lifestyle"],
    author: "Héctor García",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop",
    description: "A Japanese guide to living a meaningful and happy life."
},

{
    title: "Sapiens",
    category: ["history", "science", "psychology"],
    author: "Yuval Noah Harari",
    country: "Israel",
    image: "https://images.unsplash.com/photo-1511108690759-009324a90311?q=80&w=1000&auto=format&fit=crop",
    description: "Explores the history and evolution of humankind."
},

{
    title: "Norwegian Wood",
    category: ["romance", "drama", "literature"],
    author: "Haruki Murakami",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=1000&auto=format&fit=crop",
    description: "A beautifully written romantic and emotional novel."
},

{
    title: "Verity",
    category: ["thriller", "romance", "mystery"],
    author: "Colleen Hoover",
    country: "USA",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
    description: "A suspenseful romantic thriller with dark secrets."
},

{
    title: "The Power of Now",
    category: ["motivation", "self help", "mindfulness"],
    author: "Eckhart Tolle",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
    description: "A transformational book about mindfulness and peace."
},

    {
        title:"Clean Code",
        category:["computer","coding","software"],
        author:"Robert C. Martin",
        country:"USA",
        image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
        description:"Programming book for writing clean code."
    }

];


window.onload = function() {

    // Empty on first load
    document.getElementById("bookContainer").innerHTML = "";

}

// SHOW ALL BOOKS

function showAllBooks(){

    // Redirect to books section
   // window.location.href = "#booksSection";

    // Display all books
    displayBooks(books);
}

// RECOMMENDATION ALGORITHM
function recommendBooks(){

    // Redirect to recommendation section
    window.location.href = "#booksSection";

    const input = document.getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

    let recommendedBooks = [];


    books.forEach(book => {

        if(

            book.category.some(cat => cat.includes(input))

            ||

            book.author.toLowerCase().includes(input)

            ||

            book.country.toLowerCase().includes(input)

            ||

            book.title.toLowerCase().includes(input)

        ){

            recommendedBooks.push(book);

        }

    });



    if(recommendedBooks.length === 0){

        document.getElementById("bookContainer").innerHTML = `

            <div class="book-card">

                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop">

                <div class="book-content">

                    <h3>No Books Found</h3>

                    <p>
                        Try searching math, science, coding, fantasy, nepali, etc.
                    </p>

                </div>

            </div>

        `;

    }

    else{

        displayBooks(recommendedBooks);

    }

}
// SHOW POPULAR & MOTIVATIONAL BOOKS

function showPopularBooks(){

    // Redirect to books section
    window.location.href = "#booksSection";

    const popularBooks = books.filter(book =>

        book.category.includes("motivation")

        ||

        book.category.includes("self help")

        ||

        book.category.includes("fantasy")

        ||

        book.category.includes("literature")

        ||

        book.category.includes("novel")

    );

    displayBooks(popularBooks);

}
// DISPLAY BOOKS

function displayBooks(bookArray){

    const container = document.getElementById("bookContainer");

    container.innerHTML = "";



    bookArray.forEach(book => {

        container.innerHTML += `

            <div class="book-card">

                <img src="${book.image}" alt="${book.title}">

                <div class="book-content">

                    <h3>${book.title}</h3>

                    <p><strong>Author:</strong> ${book.author}</p>

                    <p><strong>Country:</strong> ${book.country}</p>

                    <p>${book.description}</p>

                </div>

            </div>

        `;

    });

}
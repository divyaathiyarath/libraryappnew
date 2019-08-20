const Express=require('express');
var app=new Express();
books=[
    {
        'title':'Turning points',
        'author':'A.P.J.Abdul Kalam',
        'publisher':'HarperCollins',
        'date_of_publication':'8/9/2012',
        'distributor':'HarperCollins',
        'price':225,
        'Description':'Turning points',
        pic:"/img/turningpoints.jpg"


    },
    {
        title:"Randamoozham",
        author:"M.T.Vasudevan Nair",
        publisher:"DC Books",
        date_of_publication:"December 1984",
        distributor:"DC Books",
        price:225,
        Description:"Malayalam novel",
        pic:"/img/randamoozham.jpg"

    },
    {
        title:"Aarachaar",
        author:"K.R.Meera",
        publisher:"DC Books",
        date_of_publication:"1 November 2012",
        distributor:"DC Books",
        price:225,
        Description:"Novel",
        pic:"/img/aarachar.jpg"
    },
    {
        title:"Pathummayude Aadu",
        author:"Vaikom Muhammad Basheer",
        publisher:"DC Books",
        date_of_publication:"April 1959",
        distributor:"DC Books",
        price:225,
        Description:"Novel",
        pic:"/img/pathummayudeaadu.jpg"

    },
    {
        title:"Oru Desathinte Katha",
        author:"S. K. Pottekkatt",
        publisher:"DC Books",
        date_of_publication:"1971",
        distributor:"DC Books",
        price:225,
        Description:"Novel",
        pic:"/img/orudeshathintekatha.jpg"

    },
    {
        title:"Oru Sankeerthanam Pole",
        author:"Perumbadavam Sreedharan",
        publisher:"DC Books",
        date_of_publication:"September 1993",
        distributor:"DC Books",
        price:225,
        Description:"Novel",
        pic:"/img/orusankeerthanampole.jpg"
    },
    {
        title:"Naalukettu",
        author:"M. T. Vasudevan Nair",
        publisher:"DC Books",
        date_of_publication:"1958",
        distributor:"DC Books",
        price:225,
        Description:"Novel",
        pic:"/img/naalukettu.jpg"

    },
    {
        title:"Ente Katha",
        author:"Kamala Suraiyya",
        publisher:"DC Books",
        date_of_publication:"1 February 1973",
        distributor:"DC Books",
        price:225,
        Description:"Novel",
        pic:"/img/entekatha.jpg"

    },
    {
        title:"Balyakalasakhi",
        author:"Vaikom Muhammad Basheer",
        publisher:"DC Books",
        date_of_publication:"1944",
        distributor:"DC Books",
        price:225,
        Description:"Novel",
        pic:"/img/balyakalasakhi.jpg"
    },
    {
        title:"Ini Njan Urangatte",
        author:"P. K. Balakrishnan",
        publisher:"DC Books",
        date_of_publication:"1973",
        distributor:"DC Books",
        price:225,
        Description:"Novel",
        pic:"/img/ininjanuranghatte.jpg"
    }];

    authors=[
        {
           name:"A.P.J Abdulkalam",
           place:"Tamilnadu",
           dob:"15 October 1931",
           pic:"/img/abdulkalam.jpg"
        },
        {
           name:"M. T. Vasudevan Nair",
           place:" Kudallur",
           dob:"9 August 1933",
           pic:"/img/mt.jpg"
        },
        {
           name:"K. R. Meera",
           place:"Sasthamkotta",
           dob:"19 February 1970",
           pic:"/img/krmeera.jpg"
        },
        {
           name:"Vaikom Muhammad Basheer",
           place:"Thalayolaparambu",
           dob:"21 January 1908",
           pic:"/img/basheer.jpg"
        },
        {
           name:"S. K. Pottekkatt",
           place:"Kozhikode",
           dob:"14 March 1913",
           pic:"/img/skpottekkatt.jpg"
        },
        {
            name:"Perumbadavam Sreedharan",
            place:"Perumpadavom",
            dob:"12 February 1938",
            pic:"/img/perumbadavam.jpg"
        },
        
        {
            name:"Kamala Suraiyya",
            place:"Punnayurkulam",
            dob:"31 March 1934",
            pic:"/img/kamala.jpg"

        },
        {
            name:"P. K. Balakrishnan",
            place:" Ernakulam",
            dob:"2 March 1925",
            pic:"/img/balakrishnan.jpg"
        }
    ];
nav=[{
    link:"/books",
    title:"books"

},
{
    
        link:"/authors",
        title:"authors"
},
{
        link:"/signup",
        title:"signUp"
},
{
    link:"/login",
    title:"login"
},

{
     link:"/addbooks",
     title:"add books"
}
];

app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));
app.get('/',(req,res)=>{
    res.render('index',{nav:nav,title:"Library"});
});
app.get('/login',(req,res)=>
{
    res.render('login',{nav:nav,title:"Library"});
});
app.get('/signup',(req,res)=>
{
    res.render('signup',{nav:nav,title:"Library"});
});
app.get('/addbooks',(req,res)=>
{
    res.render('addbooks',{nav:nav,title:"Library"});
});
app.get('/index',(req,res)=>{
    res.render('index',{nav:nav,title:"Library"});
});
app.get('/books',(req,res)=>{
    res.render('books',{nav:nav,title:"Books",books:books});
});
app.get('/booksingle/:id',(req,res)=>{

    const x=req.params.id;
    res.render('booksingle',{nav:nav,title:"Books","books":books[x]});
});
app.get('/authors',(req,res)=>{
    res.render('authors',{nav:nav,title:"Authors",authors:authors});
});
app.get('/authorsingle/:id',(req,res)=>{

    const x=req.params.id;
    res.render('authorsingle',{nav:nav,title:"Authors","authors":authors[x]});
});

app.listen(process.env.PORT || 3000,()=>
{
    
});
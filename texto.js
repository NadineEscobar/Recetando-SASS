// /* Variables
// :root {
//     --purple: #311e54;
//     --pink100: #ffebef;
//     --purple700: #6f00e4;
//     --purple900: #6e2cb0;
//     --white: #ffffff;
// }
  
/* Reset básico */
/* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
  
body {
    font-family: Arial, sans-serif;
    background-color: var(--pink100);
}
  
/* Navbar */
// .navbar {
//     background-color: var(--purple);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 10px 20px;
//     flex-wrap: wrap;
//     position: relative;
// }
  
// .logo {
//     width: 200px;
// }
  
// .nav-links {
//     display: flex;
//     list-style: none;
//     gap: 15px;
// }
  
// .nav-links li a {
//     color: white;
//     text-decoration: none;
//     font-weight: 600;
// }
  
// .menu-toggle {
//     display: none;
//     font-size: 30px;
//     color: white;
//     background: none;
//     border: none;
//     cursor: pointer;
// }
  
// .search {
//     display: flex;
//     align-items: center;
//     gap: 10px;
// }
  
// .search input {
//     padding: 5px;
//     border-radius: 5px;
//     border: none;
// }
  
// .auth-buttons {
//     display: flex;
//     align-items: center;
//     gap: 10px;
// }
  
// .auth-buttons a {
//     color: white;
//     border: 1px solid white;
//     padding: 5px 10px;
//     text-decoration: none;
//     border-radius: 5px;
// }
  
// .auth-buttons a:hover {
//     background-color: white;
//     color: var(--purple);
// }
  
// /* Grid System */
// .container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 15px;
// }
  
// .row {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 15px;
//     justify-content: center;
// }
  
// .col-md-3 {
//     flex: 1 1 calc(25% - 15px);
//     min-width: 250px;
// }
  
// .text-center {
//     text-align: center;
//     margin: 30px 0;
// }
  
// .text-purple-900 {
//     color: var(--purple900);
// }
  
// .bg-purple {
//     background-color: var(--purple);
//     color: var(--white);
//     padding: 10px;
// }
  
// .text-pink100 {
//     color: var(--pink100);
// }
  
// .btn {
//     background-color: var(--purple);
//     color: white;
//     padding: 8px 12px;
//     border: none;
//     border-radius: 5px;
//     text-decoration: none;
//     display: inline-block;
// }
  
// .btn:hover {
//     background-color: var(--purple700);
// }
  
// /* Recipe Card */
// .recipe-card {
//     position: relative;
// }
  
// .recipe-card img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
// }
  
// .recipe-card .overlay {
//     position: absolute;
//     bottom: 10px;
//     left: 10px;
//     background-color: rgba(49, 30, 84, 0.7);
//     color: white;
//     padding: 5px 10px;
//     border-radius: 5px;
// }
  
// /* Carrusel */
// .carousel {
//     position: relative;
//     overflow: hidden;
//     margin: 20px 0;
//     width: 100%;
//     height: 400px;
// }
  
// .carousel-inner {
//     display: flex;
//     transition: transform 0.5s ease-in-out;
// }
  
// .carousel-item {
//     min-width: 100%;
//     position: relative;
//     display: none;
// }
  
// .carousel-item.active {
//     display: block;
// }
  
// .carousel-item img {
//     width: 100%;
//     height: 400px;
//     object-fit: cover;
//     margin-bottom: 40px;
// }
  
// .carousel-caption {
//     position: absolute;
//     top: 50%;
//     right: 10%;
//     background: rgba(139, 80, 116, 0.6);
//     color: white;
//     padding: 20px;
//     text-align: center;
//     width: 30%;
// }

// .carousel-caption h3 {
//     font-size: 1.8rem;
//     font-weight: bold;
//     color: #fff;
// }
// .carousel-caption p {
//     font-size: 1.2rem;
//     color: #fff;
// }
  
// .carousel-control {
//     position: absolute;
//     top: 50%;
//     background-color: rgba(0,0,0,0.5);
//     color: white;
//     border: none;
//     padding: 10px;
//     cursor: pointer;
//     transform: translateY(-50%);
//     font-size: 30px;
//     z-index: 2;
// }
  
// .carousel-control.prev {
//     left: 10px;
// }
  
// .carousel-control.next {
//     right: 10px;
// }
// .carousel-indicators {
//     position: absolute;
//     bottom: 15px;
//     left: 50%;
//     transform: translateX(-50%);
//     display: flex;
//     gap: 8px;
//   }
  
// .indicator {
//     width: 12px;
//     height: 12px;
//     background-color: rgba(255,255,255,0.7);
//     border-radius: 50%;
//     cursor: pointer;
// }
  
// .indicator.active {
//     background-color: var(--purple700);
// }
  
// /* Cards para recetas.html */
// .card {
//     background-color: var(--purple);
//     color: white;
//     border-radius: 5px;
//     padding: 10px;
//     text-align: center;
// }
  
// .card img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//     border-radius: 5px;
// }
  
// .card a {
//     display: inline-block;
//     margin-top: 10px;
//     background-color: var(--purple700);
//     color: white;
//     padding: 5px 10px;
//     text-decoration: none;
//     border-radius: 5px;
// }
  
// .card a:hover {
//     background-color: var(--purple);
// }

// /* Secciones Sobre Nosotros */
// .about-section {
//     display: flex;
//     flex-direction: column;
//     gap: 40px;
//     margin-top: 40px;
// }
  
// .about-row {
//     display: flex;
//     flex-wrap: nowrap;
//     align-items: center;
//     justify-content: space-between;
//     gap: 20px;
//     width: 100%; 
// }
  
// .about-row.reverse {
//     flex-direction: row-reverse;
// }
  
// .about-img {
//     flex: 1 1 40%;
// }
  
// .about-img img {
//     width: 100%;
//     border-radius: 10px;
// }
  
// .about-text {
//     flex: 1 1 55%;
// }
  
// .about-text h2 {
//     color: var(--purple);
//     margin-bottom: 10px;
// }
  
// .about-text p {
//     font-size: 18px;
//     line-height: 1.6;
//     color: var(--purple900);
// }
  
// .text-center {
//     text-align: center;
//     margin: 30px 0;
// }
  
// .contact-section {
//     display: flex;
//     flex-direction: column;
//     gap: 40px;
//     margin-top: 40px;
//   }
  
//   .contact-row {
//     display: flex;
//     flex-wrap: nowrap;
//     gap: 30px;
//     align-items: flex-start;
//     justify-content: space-between;
//   }
  
//   .contact-img {
//     flex: 1 1 45%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
  
//   .contact-img img {
//     width: 100%;
//     border-radius: 10px;
//   }
  
//   .contact-img p {
//     margin-top: 20px;
//     font-size: 18px;
//     color: var(--purple900);
//     line-height: 1.5;
//   }
  
//   .contact-form {
//     flex: 1 1 50%;
//     display: flex;
//     flex-direction: column;
//   }
  
//   .contact-form h2 {
//     color: var(--purple);
//     margin-bottom: 15px;
//   }
  
//   .contact-form form {
//     display: flex;
//     flex-direction: column;
//     gap: 15px;
//   }
  
//   .contact-form input,
//   .contact-form textarea {
//     padding: 10px;
//     border: 1px solid var(--purple900);
//     border-radius: 5px;
//     font-size: 16px;
//   }
  
//   .contact-form label {
//     color: var(--purple);
//     font-weight: bold;
//   }

// /* Footer */
// footer {
//     text-align: center;
//     padding: 20px;
//     background-color: var(--purple);
//     color: white;
//     margin-top: 30px;
// }
  
// /* Responsive Navbar */
// @media(max-width: 768px) {
//     .nav-links {
//       display: none;
//       flex-direction: column;
//       width: 100%;
//       background-color: var(--purple);
//       position: absolute;
//       top: 60px;
//       left: 0;
//     }
  
//     .nav-links.active {
//       display: flex;
//     }
  
//     .menu-toggle {
//       display: block;
//     }
  
//     .search {
//       margin-top: 10px;
//     }
  
//     .auth-buttons {
//       margin-top: 10px;
//     }

//     .about-row {
//         flex-direction: column;
//         text-align: center;
//     }
    
//     .about-row.reverse {
//         flex-direction: column-reverse;
//     }
    // .contact-row {
    //     flex-direction: column;
    //     text-align: center;
    // }

    // .contact-form {
    //     align-items: center;
    // }

    // .contact-form form {
    //     width: 100%;
    // }

    // .contact-form input,
    // .contact-form textarea {
    //     width: 100%;
    // }
// } 
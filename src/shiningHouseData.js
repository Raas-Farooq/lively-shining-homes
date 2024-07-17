import React,{ useEffect, useState } from 'react';
import HousesRender from './HousesRender';

// import images from './images/karach2.webp';

const ShiningHouses = [
    {
        id:0,
        name: "Luxury Villa",
        price: '6.5 crore',
        status: 'for Sale',
        area: '500 Sq.Yd.',
        location: 'Karachi',
        address:'Nagori Stop Super Highway, 9KM from Toll Plaza, Karachi - Pakistan',
        UAN:"+92 21 38771555",
        image:"/images/karachi1.webp"
    },
    {
        id:1,
        name:"Irish Apartment",
        price: '2.5 crore',
        status: 'for Sale',
        area: '240 Sq.Yd.',
        location: 'lahore',
        address:'Maraka, Iqbal Town, Bahria Town Lahore',
        UAN:'+92-42-111-111-040. +92-42-37189611-14.',
        image:"/images/lahore8.webp"
    },
    {
        id:2,
        name:"Jannat House",
        price: '6.5 crore',
        status: 'for Sale',
        area: '500 Sq.Yd.',
        location: 'islamabad',
        address:"Central Business District, Phase 8, Bahria Town, Rawalpindi.",
        UAN:"+92 335 800 5555",
        image:"/images/islamabad7.webp"
    },
    
    {
        id:3,
        name:"Modern Apartment",
        price: '5.1 crore',
        status: 'for Sale',
        area: '380 Sq.Yd.',
        location: 'islamabad',
        address:"Central Business District, Phase 8, Bahria Town, Rawalpindi.",
        UAN:"+92 335 800 5555",
        image:"/images/islamabad2.webp"
    },
    {
        id:4,
        name: "Designing Villa",
        price: '4 crore',
        status: 'for Sale',
        area: '350 Sq.Yd.',
        location: 'lahore',
        address:'Maraka, Iqbal Town, Bahria Town Lahore',
        UAN:'+92-42-111-111-040. +92-42-37189611-14.',
        image:"/images/lahore2.webp"
    },
    {
        id:5,
        name: "Classic Home",
        price: '2.5 crore',
        status: 'for Sale',
        area: '272 Sq.Yd.',
        location: 'Karachi',
        address:'Nagori Stop Super Highway, 9KM from Toll Plaza, Karachi - Pakistan',
        UAN:"+92 21 38771555",
        image:"/images/karachi6.webp"
    },
    {
        id:6,
        name: "Unique House",
        price: '3.2 crore',
        status: 'for Sale',
        area: '300 Sq.Yd.',
        location: 'lahore',
        address:'Maraka, Iqbal Town, Bahria Town Lahore',
        UAN:'+92-42-111-111-040. +92-42-37189611-14.',
        image:"/images/lahore6.webp"
    },
    {
        id:7,
        name: "Comfort Bangla",
        price: '2.7 crore',
        status: 'for Sale',
        area: '275 Sq.Yd.',
        location: 'Karachi',
        address:'Nagori Stop Super Highway, 9KM from Toll Plaza, Karachi - Pakistan',
        UAN:"+92 21 38771555",
        image:"/images/karachi8.webp"
    },
    {
        id:8,
        name: "Residential Home",
        price: '2.7 crore',
        status: 'for Sale',
        area: '300 Sq.Yd.',
        location: 'Lahore',
        address:'Maraka, Iqbal Town, Bahria Town Lahore',
        UAN:'+92-42-111-111-040. +92-42-37189611-14.',
        image:"/images/lahore1.webp"
    }
    ,{
        id:9,
        name:"Stylish Apartment",
        price: '3.5 crore',
        status: 'for Sale',
        area: '270 Sq.Yd.',
        location: 'islamabad',
        address:"Central Business District, Phase 8, Bahria Town, Rawalpindi.",
        UAN:"+92 335 800 5555",
        image:"/images/islamabad5.webp"
    },
    
    {
        id:10,
        name: "Super Luxury",
        price: '2.2 crore',
        status: 'for Sale',
        area: '250 Sq.Yd.',
        location: 'lahore',
        address:'Maraka, Iqbal Town, Bahria Town Lahore',
        UAN:'+92-42-111-111-040. +92-42-37189611-14.',
        image:"/images/lahore3.webp"
    },
    {
        id:11,
        name: "Luxury Villa",
        price: '2.85 crore',
        status: 'for Sale',
        area: '272 Sq.Yd.',
        location: 'Karachi',
        address:'Nagori Stop Super Highway, 9KM from Toll Plaza, Karachi - Pakistan',
        UAN:"+92 21 38771555",
        image:"/images/karachi2.webp"
    },
    
    {
        id:13,
        name: "Vadera Bangla",
        price: '3 crore',
        status: 'for Sale',
        area: '300 Sq.Yd.',
        location: 'lahore',
        address:'Maraka, Iqbal Town, Bahria Town Lahore',
        UAN:'+92-42-111-111-040. +92-42-37189611-14.',
        image:"/images/lahore5.webp"
    },
    {
        id:14,
        name: "Heaven Home",
        price: '1.71 crore',
        status: 'for Sale',
        area: '200 Sq.Yd.',
        location: 'Karachi',
        address:'Nagori Stop Super Highway, 9KM from Toll Plaza, Karachi - Pakistan',
        UAN:"+92 21 38771555",
        image:"/images/karachi5.webp"
    },
    {
        id:15,
        name: "Pure Stone",
        price: '4.2 crore',
        status: 'for Sale',
        area: '320 Sq.Yd.',
        location: 'lahore',
        address:'Maraka, Iqbal Town, Bahria Town Lahore',
        UAN:'+92-42-111-111-040. +92-42-37189611-14.',
        image:"/images/lahore7.webp"
    },
    {
        id:16,
        name: "Nice Villa",
        price: '2.5 crore',
        status: 'for Sale',
        area: '375 Sq.Yd.',
        location: 'lahore',
        address:'Maraka, Iqbal Town, Bahria Town Lahore',
        UAN:'+92-42-111-111-040. +92-42-37189611-14.',
        image:"/images/lahore4.webp"
    },
    {
        id:17,
        name:"Shaheen Home",
        price: '4.5 crore',
        status: 'for Sale',
        area: '350 Sq.Yd.',
        location: 'islamabad',
        address:"Central Business District, Phase 8, Bahria Town, Rawalpindi.",
        UAN:"+92 335 800 5555",
        image:"/images/islamabad1.webp"
    },
    {
        id:18,
        name: "Smart Villa",
        price: '1.71 crore',
        status: 'for Sale',
        area: '200 Sq.Yd.',
        location: 'Karachi',
        address:'Nagori Stop Super Highway, 9KM from Toll Plaza, Karachi - Pakistan',
        UAN:"+92 21 38771555",
        image:"/images/karachi4.webp"
    },
    
    {
        id:19,
        name:"Luxury Super",
        price: '4.5 crore',
        status: 'for Sale',
        area: '340 Sq.Yd.',
        location: 'islamabad',
        address:"Central Business District, Phase 8, Bahria Town, Rawalpindi.",
        UAN:"+92 335 800 5555",
        image:"/images/islamabad3.webp"
    },
    {
        id:20,
        name:"Corner Bangla",
        price: '6.3 crore',
        status: 'for Sale',
        area: '420 Sq.Yd.',
        location: 'islamabad',
        address:"Central Business District, Phase 8, Bahria Town, Rawalpindi.",
        UAN:"+92 335 800 5555",
        image:"/images/islamabad4.webp"
    },
    {
        id:21,
        name: "Paradise Kothi",
        price: '4.1 crore',
        status: 'for Sale',
        area: '500 Sq.Yd.',
        location: 'Karachi',
        address:'Nagori Stop Super Highway, 9KM from Toll Plaza, Karachi - Pakistan',
        UAN:"+92 21 38771555",

        image:"/images/karachi7.webp"
    },
    
    {
        id:22,
        name:"Mega Villa",
        price: '8 crore',
        status: 'for Sale',
        area: '600 Sq.Yd.',
        location: 'islamabad',
        address:"Central Business District, Phase 8, Bahria Town, Rawalpindi.",
        UAN:"+92 335 800 5555",
        image:"/images/islamabad6.webp"
    },
    {
        id:23,
        name: "Outside Super House",
        price: '2.9 crore',
        status: 'for Sale',
        area: '272 Sq.Yd.',
        location: 'Karachi',
        address:'Nagori Stop Super Highway, 9KM from Toll Plaza, Karachi - Pakistan',
        UAN:"+92 21 38771555",
        image:"/images/karachi3.webp"
    },
    {
        id:24,
        name:"Lightning Home",
        price: '5.5 crore',
        status: 'for Sale',
        area: '400 Sq.Yd.',
        location: 'islamabad',
        address:"Central Business District, Phase 8, Bahria Town, Rawalpindi.",
        UAN:"+92 335 800 5555",
        image:"/images/islamabad8.webp"
    }
] 

export default ShiningHouses;
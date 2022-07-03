import React from "react";

export default function Menu() {
    return(<><nav className="main_nav">
    <div className="container">
        <div className="row">
            <div className="col">
                
                <div className="main_nav_content d-flex flex-row">

                    <div className="main_nav_menu">
                        <ul className="standard_dropdown main_nav_dropdown">
                            <li><a href="/">Home<i className="fa fa-chevron-down"></i></a></li>
                            <li className="hassubs">
                                <a href="/">Laptop<i className="fa fa-chevron-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="/">Lenovo<i className="fa fa-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="/">Lenovo 1<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="/">Lenovo 3<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="/">Lenovo 2<i className="fa fa-chevron-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">DELL<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="/">APPLE<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="/">HP<i className="fa fa-chevron-down"></i></a></li>
                                </ul>
                            </li>
                            <li className="hassubs">
                                <a href="/">Featured Brands<i className="fa fa-chevron-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="/">APPLE<i className="fa fa-chevron-down"></i></a>
                                        <ul>
                                            <li><a href="/">Laptop<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="/">Mobiles<i className="fa fa-chevron-down"></i></a></li>
                                            <li><a href="/">Ipads<i className="fa fa-chevron-down"></i></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Samsung<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="/">Lenovo<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="/">DELL<i className="fa fa-chevron-down"></i></a></li>
                                </ul>
                            </li>
                            <li className="hassubs">
                                <a href="/">Pages<i className="fa fa-chevron-down"></i></a>
                                <ul>
                                    <li><a href="shop.html">Shop<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="product.html">Product<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="blog.html">Blog<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="blog_single.html">Blog Post<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="regular.html">Regular Post<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="cart.html">Cart<i className="fa fa-chevron-down"></i></a></li>
                                    <li><a href="contact.html">Contact<i className="fa fa-chevron-down"></i></a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog<i className="fa fa-chevron-down"></i></a></li>
                            <li><a href="contact.html">Contact<i className="fa fa-chevron-down"></i></a></li>
                        </ul>
                    </div>
                    <div className="menu_trigger_container ml-auto">
                        <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                            <div className="menu_burger">
                                <div className="menu_trigger_text">menu</div>
                                <div className="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</nav><div className="page_menu">
    <div className="container">
        <div className="row">
            <div className="col">
                
                <div className="page_menu_content">
                    <ul className="page_menu_nav">
                        <li className="page_menu_item has-children">
                            <a href="/">Language<i className="fa fa-angle-down"></i></a>
                            <ul className="page_menu_selection">
                                <li><a href="/">English<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Italian<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Spanish<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Japanese<i className="fa fa-angle-down"></i></a></li>
                            </ul>
                        </li>
                        <li className="page_menu_item has-children">
                            <a href="/">Currency<i className="fa fa-angle-down"></i></a>
                            <ul className="page_menu_selection">
                                <li><a href="/">US Dollar<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">EUR Euro<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">GBP British Pound<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">JPY Japanese Yen<i className="fa fa-angle-down"></i></a></li>
                            </ul>
                        </li>
                        <li className="page_menu_item">
                            <a href="/">Home<i className="fa fa-angle-down"></i></a>
                        </li>
                        <li className="page_menu_item has-children">
                            <a href="/">Super Deals<i className="fa fa-angle-down"></i></a>
                            <ul className="page_menu_selection">
                                <li><a href="/">Super Deals<i className="fa fa-angle-down"></i></a></li>
                                <li className="page_menu_item has-children">
                                    <a href="/">Menu Item<i className="fa fa-angle-down"></i></a>
                                    <ul className="page_menu_selection">
                                        <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                        <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                        <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                        <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                    </ul>
                                </li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                            </ul>
                        </li>
                        <li className="page_menu_item has-children">
                            <a href="/">Featured Brands<i className="fa fa-angle-down"></i></a>
                            <ul className="page_menu_selection">
                                <li><a href="/">Featured Brands<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                            </ul>
                        </li>
                        <li className="page_menu_item has-children">
                            <a href="/">Trending Styles<i className="fa fa-angle-down"></i></a>
                            <ul className="page_menu_selection">
                                <li><a href="/">Trending Styles<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                <li><a href="/">Menu Item<i className="fa fa-angle-down"></i></a></li>
                            </ul>
                        </li>
                        <li className="page_menu_item"><a href="blog.html">blog<i className="fa fa-angle-down"></i></a></li>
                        <li className="page_menu_item"><a href="contact.html">contact<i className="fa fa-angle-down"></i></a></li>
                    </ul>
                    
                    <div className="menu_contact">
                        <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/phone_white.png" alt=""/></div>+91 8870956756</div>
                        <div className="menu_contact_item"><div className="menu_contact_icon"><img src="images/mail_white.png" alt=""/></div><a href="mailto:v.sathyanantham@gmail.com">v.sathyanantham@gmail.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></>)
}
// hojas de estilo
import '../style/Home/info.css';
import '../style/Home/nav.css';
import '../style/Home/banner.css';
import '../style/Home/tiendainicio.css'


import React, { useEffect, useState } from 'react';
import { AiOutlinePhone, AiOutlineSearch, AiFillStar } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi';
import { RiAliensLine } from 'react-icons/ri';
import { MdArrowForwardIos } from 'react-icons/md';
import { FaBong } from 'react-icons/fa';
import getBong from '../functions/getBong';




const Home = () => {

    const [bongs, setBongs] = useState();

    useEffect(() => {
        getBong(setBongs);
    }, []);


    return (
        < div className='container'>
            <div className="info">
                <div className="numero"><AiOutlinePhone />+56912345678</div>
                <div className="oferta">
                    Get 50% Off on selected items | Shop Now
                </div>
                <div className="localizacion">
                    <select name="idioma" id="idioma">
                        <option value="default">Idioma</option>
                        <option value="es">Es</option>
                        <option value="en">En</option>
                    </select>
                    <select name="pais" id="pais">
                        <option value="default">Pais</option>
                        <option value="chile">Chile</option>
                        <option value="argentina">Argentina</option>
                        <option value="peru">Peru</option>
                        <option value="Colombia">Colombia</option>
                    </select>
                </div>
            </div>

            <nav>
                {//<img src="https://pbs.twimg.com/media/A8VHieCCAAA-CbG.jpg" alt="ted con un pollo que tiene marihuana" className='img-ted' />
                }
                <h2><FaBong /> BongShop</h2>
                <select name="categorias" id="categorias">
                    <option value="default">Categorias</option>
                    <option value="bong">Bong</option>
                    <option value="banger">Banger</option>
                    <option value="bongsilicona">Bong de silicona</option>
                </select>
                <p>Deals</p>
                <p>What's New</p>
                <p>Delivery</p>
                <div className="input">
                    <input type="text" name="search" id="search" placeholder='Search Product' />
                    <AiOutlineSearch />

                </div>
                <div className="account"><RiAliensLine /> Cuenta</div>
                <div className="carrito"><FiShoppingCart /> Carrito</div>
            </nav>


            <div className="banner">
                <img src="https://www.gotnewswire.com/wp-content/uploads/2021/08/begginer-bongs.jpg" alt="banner bong" />

            </div>
            <div className="tienda-inicio">
                <div className="seleccionar-tipos">
                    <div className="tipo1">
                        <select name="tipo-bong" id="tipo-bong">
                            <option value="default">Tipo</option>
                            <option value="pyrex">Pyrex</option>
                            <option value="silicona">Silicona</option>
                            <option value="ceramica">Ceramica</option>
                        </select>
                        <select name="precio" id="precio">
                            <option value="default">Precio</option>
                            <option value="mas-bajo">Mas bajo</option>
                            <option value="mas-altp">Mas alto</option>
                        </select>
                    </div>
                    <div div className="ordenar-por">
                        <select name="ordenar" id="ordenar">
                            <option value="ordenar-por">Ordenar por</option>
                        </select>
                    </div>
                </div>

                <h1>Bongs para ti!</h1>
                <div className="bongs">
                    {bongs != null ?
                        bongs.map(bong => (
                            <div className="card" key={bong.asin}>
                                <div className="card-body">
                                    <div className="card-img">
                                        <img src={bong.thumbnail} alt={bong.title} />
                                    </div>
                                    <div className="card-title">
                                        <p className="titulo-bong">{bong.title}</p>
                                        <p className="precio-bong">${bong.price.current_price}</p>
                                    </div>
                                    <p className='descripcion-bong'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit excepturi, eligendi voluptas quibusdam asperiores dicta exercitationem iure, ex magnam nisi consectetur beatae quas vero aliquid soluta quos explicabo perspiciatis adipisci!</p>
                                    <p className='evaluacion-bong'><AiFillStar />{bong.reviews.rating}</p>
                                    <div className="btn-carrito">
                                        <button className='btn-agregar-carrito'>
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))

                        : ''}

                </div>
                <div className="paginacion">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button><MdArrowForwardIos /></button>
                </div>
            </div>
        </div >
    );
}

export default Home;

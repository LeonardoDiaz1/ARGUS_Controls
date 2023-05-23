import './css/Products.css'
import { BiCaretRight, BiCaretDown, BiPlus } from "react-icons/bi"

export default function Products() {
    return (
        <section>
            <header>
                <h1>ARGUS Controls. Nuestros Productos</h1>
            </header>
            <div className='container-title'>Controles</div>
            <main>
                <div className='container-img'>
                    <img src='https://static.grainger.com/rp/s/is/image/Grainger/44R204_AW01?$zmmain$' />
                </div>
                <div className='container-info-product'>
                    <div className='container-price'>
                        <span>$95.00</span><BiCaretRight style={{ color: 'black' }} />
                    </div>
                    <div className='container-details-products'>
                        <div className='form-group'>
                            <label htmlFor="colour">Marca</label>
                            <select name="colour" id="colour">
                                <option disabled selected value="">Elige una Opción</option>
                                <option value="emerson">Emerson</option>
                                <option value="dixell">Dixell</option>
                                <option value="danfoss">Danfoss</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="modelo">Modelo</label>
                            <select name="modelo" id="modelo">
                                <option disabled selected value="">Elige una Opción</option>
                                <option value="emerson">Emerson</option>
                                <option value="dixell">Dixell</option>
                                <option value="danfoss">Danfoss</option>
                            </select>
                        </div>
                        <button className='btn-clean'>Limpiar</button>
                    </div>
                    <div className='container-add-cart'>
                        <div className='container-quantity'>
                            <input type="number" placeholder='1' value='1' min='1' className='input-quantity' />
                        </div>
                        <button className='btn-add-to-cart'><BiPlus style={{ color: 'white' }} />Añadir al carrito</button>
                    </div>
                    <div className='container-description'>
                        <div className='title-description'>
                            <h5>Descripción</h5>
                            <BiCaretDown style={{ color: 'black' }} />
                        </div>
                        <div className='text-description'>
                            <p style={{ color: 'grey' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque odit quis saepe magni alias non sequi dicta velit, iure id laboriosam blanditiis quisquam facere consequuntur deleniti itaque error totam recusandae.</p>
                            <p style={{ color: 'grey' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur voluptatum natus nisi cumque, totam eum nihil, tempora dicta numquam obcaecati mollitia, impedit fugiat. Et aliquam debitis iste, pariatur fugit voluptatibus?</p>
                        </div>
                    </div>
                    <div className='container-additional-information'>
                        <div className='title-additional-information'>
                            <h5>Información Adicional</h5>
                            <BiCaretDown style={{ color: 'black' }} />
                        </div>
                        <div className='text-additional-information'>
                            <p style={{ color: 'grey' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id quos adipisci tenetur laborum asperiores pariatur nam dolorem dolore eligendi aperiam molestiae, enim deleniti! Esse dolorum deserunt odit explicabo perspiciatis.</p>
                            <p style={{ color: 'grey' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio officiis sunt velit placeat consectetur quae molestiae delectus accusantium. Earum sunt neque pariatur minus magni non inventore et hic veritatis alias!</p>
                        </div>
                    </div>
                    <div className='container-reviews'>
                        <div className='title-reviews'>
                            <h5>Reseñas</h5>
                            <BiCaretDown style={{ color: 'black' }} />
                        </div>
                        <div className='text-reviews'>
                            <p style={{ color: 'grey' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime id quos adipisci tenetur laborum asperiores pariatur nam dolorem dolore eligendi aperiam molestiae, enim deleniti! Esse dolorum deserunt odit explicabo perspiciatis.</p>
                            <p style={{ color: 'grey' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio officiis sunt velit placeat consectetur quae molestiae delectus accusantium. Earum sunt neque pariatur minus magni non inventore et hic veritatis alias!</p>
                        </div>
                    </div>
                </div>
            </main>
            <section className='container-related-products'>
                <h2 style={{ color: 'black' }}>Productos Relacionados</h2>
                <br />
                <div className='card-list-products'>
                    <div className='card'>
                        <div className='card-img'>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/818QOB2Lr7L._AC_UL210_SR210,210_.jpg" alt="producto-1" />
                        </div>
                        <div className='info-card'>
                            <div className='text-product'>
                                <h3>Control 1</h3>
                                <p className="category">
                                    Control numero 1
                                </p>
                            </div>
                            <div className="price">$85.00</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-img'>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/818QOB2Lr7L._AC_UL210_SR210,210_.jpg" alt="producto-2" />
                        </div>
                        <div className='info-card'>
                            <div className='text-product'>
                                <h3>Control 1</h3>
                                <p className="category">
                                    Control numero 1
                                </p>
                            </div>
                            <div className="price">$85.00</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-img'>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/818QOB2Lr7L._AC_UL210_SR210,210_.jpg" alt="producto-3" />
                        </div>
                        <div className='info-card'>
                            <div className='text-product'>
                                <h3>Control 1</h3>
                                <p className="category">
                                    Control numero 1
                                </p>
                            </div>
                            <div className="price">$85.00</div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-img'>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/818QOB2Lr7L._AC_UL210_SR210,210_.jpg" alt="producto-4" />
                        </div>
                        <div className='info-card'>
                            <div className='text-product'>
                                <h3>Control 1</h3>
                                <p className="category">
                                    Control numero 1
                                </p>
                            </div>
                            <div className="price">$85.00</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
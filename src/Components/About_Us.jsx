import './css/About_Us.css'

export default function About_Us (){
    return(
        <section className='container section_2'>
            <h3 className='section_2-title'>Sobre Nosotros</h3>
            <br />
            <div className='us'>
                <div className='us-paragraph'>
                    <p className='paragraph-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae, temporibus alias vitae assumenda eligendi explicabo ipsum, perferendis itaque obcaecati iusto corrupti eaque eum dolor deleniti nobis nihil molestias minus.
                    </p>
                    <p className='paragraph-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus adipisci officia vitae labore, recusandae iste quidem rerum error quod illum vel voluptatibus alias quis pariatur debitis hic! Ducimus, voluptas quam.
                    </p>
                    <p className='paragraph-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellat qui provident est vitae facere eum eligendi aperiam, eius alias laudantium quos consectetur, porro quia illum esse illo. Quibusdam, aperiam.
                    </p>
                </div>
                <div className='us-img'>
                    <img src='https://merca3w.com/wp-content/uploads/dise%C3%B1o-web.jpg' className='img-img' />
                </div>
            </div>
        </section>
    )
}
import BannerStrip from '../homeComponents/BannerStrip'

const AboutBanner = () => {
    return (
        <>
            <section className="banner">
                <div className="container-fluid px-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-sm-11 col-12">
                            <div className="banner-content d-flex align-items-center text-center flex-column gap-4">
                                <div className="common-title">
                                    <h6>ABOUT VASTRA INTERNATIONAL</h6>
                                    <h1>Two decades of formal wear, made to a buyer’s brief.</h1>
                                </div>
                                <p>Vastra International is a Mumbai-based garment manufacturer and exporter, established in 2008 as part of the Vastra Group. We produce formal wear, corporate apparel, uniforms, workwear and casual garments for quality-conscious domestic and overseas buyers.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <BannerStrip image="/banner/about-banner.jpg" />
        </>
    )
}

export default AboutBanner
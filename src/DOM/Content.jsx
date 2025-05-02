import '../style/index.css'

import { HeroBtn } from "../Component/CompButton"
import { BannerInput } from "../Component/CompButton"
import { CardContainer } from "../Component/CompContent"

// Home's Components From this
// Header
// Hero section
export function HeroSec () {
    return (
        <section className="mobile:px-5 pb-16 pt-20 overflow-hidden laptop:px-20 desktop:px-36 relative max-w-7xl maxh-96 h-full w-full rounded-xl flex flex-col gap-6 justify-center items-center ">
            <div className="w-full h-full bg-no-repeat bg-fixed bg-cover bg-center bg-hero-bg brightness-50 rounded-xl absolute ">
            </div>
          <div className="max-w-4xl text-white flex flex-col justify-center items-center gap-y-3 z-10">
              <h1 className="text-white mobile:text-2xl laptop:text-5xl text-center">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
              <p className="mobile:text-sm text-center">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
                 Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
          </div>
        <HeroBtn/>
        </section>
    )
}

// Article
// Title
export function TitleArticle () {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-dark-primary laptop:text-3xl mobile:text-2xl font-semibold">Koleksi Video Pembelajaran Unggulan</h3>
            <p className="text-dark-secondary laptop:text-base mobile:text-sm font-medium">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami! </p>
        </div>
    )
}

// Menu Bar Header Card list
export function MenuBar () {
    return (
        <div className="scrollbar w-full overflow-auto whitespace-nowrap scroll" >
            <ul className=" laptop:text-base mobile:text-sm font-medium  flex gap-1.5">
                <li className="hover:cursor-pointer py-3 pr-9 text-red-600 hover:text-red-400">Semua Kelas</li>
                <li className="hover:cursor-pointer py-3 pr-9 hover:text-gray-400">Pemasaran</li>
                <li className="hover:cursor-pointer py-3 pr-9 hover:text-gray-400">Desain</li>
                <li className="hover:cursor-pointer py-3 pr-9 hover:text-gray-400">Pengembangan Diri</li>
                <li className="hover:cursor-pointer py-3 pr-9 hover:text-gray-400">Bisnis</li>
            </ul>
        </div>
    )
}
      
// Content Card List
export function CardList ({apiData, handleEdit, deleteData, isButton}) {
   
    return (
        <div className='w-full h-full flex flex-wrap justify-start items-center gap-6 mb-16'>
        { Object.values(apiData).map((item) =>
            <CardContainer apiData={apiData} handleEdit={handleEdit} item={item} isButton={isButton} deleteData={deleteData} idData={item.id}
            key={item.id} img={item.image} avatar={item.avatar} fullname={item.fullname} price={item.price} title={item.title} job={item.job} company={item.company} />
            )}        
        </div>
    )
}

// Banner CTA
export function BannerSec () {
    return (
        <section className="mobile:px-5 pb-16 pt-20 overflow-hidden laptop:px-20 desktop:px-36 relative max-w-7xl h-96 w-full rounded flex flex-col gap-10 justify-center items-center ">
            <div className="w-full h-full bg-no-repeat bg-fixed bg-cover bg-center bg-banner-bg brightness-50 rounded    absolute ">
            </div>
          <div className="max-w-lg max-h-56 text-white text-center flex flex-col justify-center items-center gap-y-1 z-10">
              <p className='mobile:text-base tablet:text-lg font-medium'>NEWSLETTER</p>
              <h3 className="text-white font-semibold mobile:text-2xl laptop:text-3xl">Mau Belajar Lebih Banyak?</h3>
              <p className="tablet:text-base mobile:text-sm">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
          </div>
              <BannerInput/>
        </section>
    )
}


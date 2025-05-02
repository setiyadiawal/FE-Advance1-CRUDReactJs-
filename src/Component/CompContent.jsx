import rating from "../assets/Rating.png"

import { Button } from "antd"

export function CardContainer ({img, avatar, isButton, fullname, price, title, job, company, item, idData, handleEdit, deleteData}) {
    return (
        <div className=" laptop:max-w-sm laptop:h-[426px] bg-white border rounded-lg mobile:p-4 laptop:p-5 flex flex-col items-center mobile:gap-2 laptop:gap-4">
            <div id="desc" className="max-w-[344px] flex laptop:flex-col mobile:flex-row mobile:items-start laptop:items-center gap-4">
                <div className="laptop:w-[344px]  mobile:h-24 laptop:h-48">
                    <img src={img} className="object-cover laptop:w-96 mobile:h-full laptop:h-48 rounded-lg" />
                </div>
               <div>
                <div id="title" className="flex flex-col gap-1 max-w-[344px] max-h-24  " >
                    <h6 className="text-dark-primary laptop:text-lg mobile:text-base hp:max-w-full max-w-44 font-semibold">{title}</h6>
                    <p className="text-base font-medium pr-2 text-dark-secondary mobile:hidden laptop:block overflow-hidden truncate">
                        Mulai transformasi dengan instruktur <br/> profesional, harga yang terjangkau, dan kurikulum terbaik</p>
                </div>

                <div id="user" className="w-full flex gap-2.5 laptop:mt-3">
                    <img src={avatar} className="mobile:max-w-9 laptop:max-w-10 rounded-xl object-contain"/>
                    <div className="flex flex-col justify-start items-start">
                        <p className="mobile:text-sm laptop:text-base font-semibold hp:max-w-full max-w-14 text-dark-primary">{fullname}</p>
                        <p className="mobile:text-sm laptop:text-sm font-medium text-dark-secondary">{job} <span className="mobile:hidden laptop:inline-block">di <b>{company}</b></span> </p>
                    </div>
                </div>
                </div>  
            </div>

            <div id="rate" className="w-full flex place-content-between">
                <div id="stars" className="flex gap-2 justify-center items-center">
                    <img src={rating} />
                    <p className="text-sm text-dark-secondary font-medium underline decoration-solid underline-offset-auto">3.5 (86)</p>
                </div>
                <h4 className="text-2xl text-green-500 font-semibold">Rp {price}K</h4>
            </div>
            {
                !isButton && (
                    <div className="flex gap-2">
                    <Button size="small" onClick={() => handleEdit(item)} type="primary" style={{backgroundColor: 'blue'}}>Edit</Button>
                    <Button size="small" onClick={() => deleteData(idData)} type="primary" style={{backgroundColor: 'red'}}>Hapus</Button>
                    </div>
                )
            }
        </div>
    )
}


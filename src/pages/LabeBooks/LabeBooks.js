import React from 'react'
import { CtnLabeBooks } from './styledLabeBooks'
export function LabeBooks() {
  return (
    <CtnLabeBooks>
            <article>
                <div className="rooms-single ">
                    <div className="rooms-img ">
                       
                        <div className="rooms-status ">
                            <span># numero</span>
                            <span>posicion</span>
                        </div>
                        <span className='badge1'>
                            badge1
                        </span>
                    </div>
                    <div className="rooms-content ">
                        <div className="rooms-title ">
                            <h2>
                               
                            </h2>
                        </div>
                        <div className="rooms-overview ">
                            <p>Nacimiento:</p>
                            <p>Posicion:</p>
                        </div>
                        <div className="rooms-price ">
                            <p>Equipo</p>
                        </div>
                    </div>
                </div>
          

            <div className="rooms-item ">
                <div className="rooms-single ">
                    <div className="rooms-img ">
                        <div className="rooms-status ">
                            <span># numero</span>
                            <span>posicion</span>
                        </div>
                        <div className="rooms-action ">
                       
                        </div>
                    </div>
                    <div className="rooms-content ">
                        <div className="rooms-title ">
                            <h2>
                            </h2>
                        </div>
                        <div className="rooms-overview ">
                            <p>Nacimiento:</p>
                            <p>Posicion:</p>
                        </div>
                        <div className="rooms-price ">
                            <p>Equipo</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    </article>
</CtnLabeBooks>
  )
}

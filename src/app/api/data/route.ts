
import { NextRequest, NextResponse } from "next/server";
import mobile from '../../../../json/mobile.json'
import tvs from '../../../../json/tvs.json'
import food from '../../../../json/food.json'



export async function  GET(){
    try{ 


    
    return NextResponse.json({
        status:200,
        result:"done"
    })

}catch(error){
    
    console.error(error);
}
}

export async function POST(req:any){
    try{
        
        const body = await req.json();
        
        
        
        if(body.category==='Mobile Phones'){
            return NextResponse.json({
                status: 200,
                result: mobile

            })
            
        }else if(body.category==='Tvs'){
            return NextResponse.json({
                status: 200,
                result: tvs
                })
                }
        else if(body.category==='food'){
            return NextResponse.json({
                status: 200,
                result: food
                })

        }
        else{
            return NextResponse.json({
                status:200,
                result:"mobile"

            })
        }  
                
        
        return NextResponse.json({
            status:200,
            result:'no-one'
        });

    }catch(error){
        console.error(error);
        return NextResponse.json({
            status: 500,
            result: "Internal Server Error"
          });
    }
}

export const dynamic = "force-static";

import { NextRequest, NextResponse } from "next/server";
import mobile from '../../../../json/mobile.json'



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
        const { page = 1, pageSize = 10 } = body;

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedData = mobile.slice(startIndex, endIndex);
        
        if(body.category==='Mobile Phones'){
            return NextResponse.json({
                status: 200,
                data: paginatedData,
                page,
                pageSize,
                total: mobile.length,

            })
            
        }else{
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
import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';



const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border shadow-gray'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item xs={6}>

                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://s3no.cashify.in/pd-admin/0dd8c5a1a3e4463eb5944158351d558d.jpg?p=es5sq&s=es" alt="" />
                    <div className='ml-5' space-y-2>
                        <p className=''>OnePlus 8T - Refurbished</p>
                        <p className='opacity-50 text-xs font-semibold'>Storage: 8 GB / 128 GB</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Aquamarine Green</p>

                    </div>
                </div>

            </Grid>

            <Grid item xs={2}>
            <p>₹10999</p>
            </Grid>

            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px",heigth:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered on March 03
                    </span>
                    
                </p>

                <p className='text-xs'>
                    Your Phone Has Been Delivered
                </p>

                </div>}
                {false && <p>
                    <span>
                        Expected Delivery On March 03
                    </span>
                </p>}

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard
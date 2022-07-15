import Image from 'next/image'

const Leafs = () => {

    return(
<div className="leafs">

<div className='leaf1'>
<Image src="/leaf1.png"  width={100} height={100}/>    
</div>

<div className='leaf2'>
<Image src="/leaf2.png"  width={200} height={200}/>    
</div>

<div className='leaf3'>
<Image src="/leaf3.png"  width={100} height={100}/>    
</div>

<div className='leaf4'>
<Image src="/leaf4.png"  width={100} height={100}/>    
</div>

<div className='leaf6'>
<Image src="/leaf6.png"  width={100} height={100}/>    
</div>

</div>
    )
}

export default Leafs;
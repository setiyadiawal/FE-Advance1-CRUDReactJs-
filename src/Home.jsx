import { Button, Modal, Form, Input, InputNumber, Result, Select, Spin } from 'antd'
import { useEffect, useState } from 'react'
import '@ant-design/v5-patch-for-react-19';
import { v4 as uuidv4 } from 'uuid';

 
import { HomeNav } from "./DOM/Navbar"
import { HeroSec } from "./DOM/Content"
import { TitleArticle } from "./DOM/Content"
import { MenuBar } from "./DOM/Content"
import { CardList } from "./DOM/Content"
import { BannerSec } from "./DOM/Content"
import { HomeFooter } from "./DOM/Footer"
import { getApi, postApi, putApi, deleteApi } from './services/api/api';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
import card1 from "./assets/card-1.jpeg"
import card2 from "./assets/card-2.jpeg"
import card4 from "./assets/card-4.jpeg"
import card5 from "./assets/card-5.jpeg"
import card6 from "./assets/card-6.jpeg"
import card9 from "./assets/card-9.jpeg"
import avatar1 from "./assets/av1.png"
import avatar2 from "./assets/av2.png"
import avatar3 from "./assets/av3.png"
import avatar4 from "./assets/av4.png"
import avatar5 from "./assets/av5.png"
import avatar6 from "./assets/av6.png"

function Home() {


// useEffect (() => {
//     const check = () => {
//       if (dataLama[0]) {
//         setApiData(dataLama)
//       }
//     }
//     check()
// }, [])

const [form] = Form.useForm()
const [isOpen, setIsOpen] = useState(false)
const [loading, setLoading] = useState(false)
const [showButton, setShowButton] = useState(false)
const [isEditing, setIsEditing] = useState(false)
const [isButton, setIsButton] = useState(true)
const [apiData, setApiData] = useState([])

// Function Ambil Semua Data dari API
const getAllData = async () => {
  setLoading(true)
  const getData = await getApi()
  console.log('AAA NULL', apiData)
  
  setApiData(getData || {}); 
  setLoading(false)
  }

// Jalankan Function untuk mengambil data ketika halaman render pertama kali
useEffect(() => {
    getAllData()
  },[])  

// Melakukan render setiap data di dalam state apiData ada perubahan
useEffect(() => {
  console.log('apiData diperbarui !', apiData)
  }, [apiData])
  

const dataLama = Object.values(apiData || {}) // Untuk mengambil array yg berisi data
const firebaseKey = Object.keys(apiData || {}) // Untuk mengambil array berisi key dari data di Firebase

//Option Gambar
const optionImg = [
    {
    value: card1,
    label: 'Card 1'
    },{
    value: card2,
    label: 'Card 2'
    },{
    value: card4,
    label: 'Card 3'
    },{
    value: card5,
    label: 'Card 4'
    },{
    value: card6,
    label: 'Card 5'
    },{
    value: card9,
    label: 'Card 6'
    }
  ]

//Option Avatar Profile
const optionAvatar = [
    {
    value: avatar1,
    label: 'Avatar 1'
    },{
    value: avatar2,
    label: 'Avatar 2'
    },{
    value: avatar3,
    label: 'Avatar 3'
    },{
    value: avatar4,
    label: 'Avatar 4'
    },{
    value: avatar5,
    label: 'Avatar 5'
    },{
    value: avatar6,
    label: 'Avatar 6'
    }
  ]

// POST and PUT API
const saveData = async (e) => {
    try {

      // POST API
      console.log('POST DATA DIMULAI', e)
      console.log('POST DATA button', isButton) //false  true
      console.log('POST DATA editing', !isEditing) //true   true
      if (isButton && !isEditing) {
          console.log('POST DATA DIMULAI2')
          let addData = {
            id : uuidv4(), ...e };

          await postApi(addData);
          getAllData(); // Perbarui state agar UI juga ikut berubah

        } else {
      // PUT API
        const updatedData = { ...selectedClass, ...e };
        const key = firebaseKey.find(key => apiData[key].id === selectedClass.id);
          
        if (key) {
            await putApi(key, updatedData);
          }
          getAllData(); // Perbarui state agar UI juga ikut berubah
        }
        }
    catch (error) {
            console.log ('POST API ERROR', error);
        }
  }

// Delete data
const deleteData = async (id) => {
  const key = firebaseKey.find(key => apiData[key].id === id);

  if (key) {
      await deleteApi(key);
    } else {
      console.error("Firebase key tidak ditemukan, data gagal dihapus!");
    }
    console.log('API DATA. Length', apiData.length)
    getAllData();// Perbarui state agar UI juga ikut berubah
    setIsButton(true)
    console.log('DATA API NULL22', apiData)
    

  }
    
const [isAdd, setIsAdd] = useState(false);
const [selectedClass, setSelectedClass] = useState('');

const closeModal = () => {
  form.resetFields();
  setSelectedClass(null);
  setIsOpen(false);
  setIsEditing(false);
}

const handleEdit = (e) => {
  form.resetFields();
  setSelectedClass(null); // Data yang dipilih
  
  setIsEditing(true);
  setSelectedClass(e); // Data yang dipilih
  setIsOpen(true);
  setIsAdd(false);

// Memasukkan default ketika mode edit aktif sesuai data yang dipilih
  form.setFieldValue({
    image: card1, 
    avatar: avatar1,
    job: selectedClass?.job || '',
    title: selectedClass?.title || '', 
    fullname: selectedClass?.fullname || '', 
    price: selectedClass?.price || ''
  });
};

useEffect(() => {
  if (selectedClass) {
    form.setFieldsValue(selectedClass);
  }
}, [selectedClass]);


    return (
      <>
        <HomeNav/>
       <div id="article" className="w-full flex flex-col laptop:gap-8 mobile:gap-6 mobile:pt-0 mobile:px-5  laptop:pt-7 laptop:px-28">
        <HeroSec/>
        <TitleArticle/>
        <MenuBar/>
        {loading ? <Spin tip="Loading" size="large" fullscreen/> : ''}
        {
          dataLama.length === 0 ? <Result status="500" title="Maaf, Tidak ada kelas yang tersedia." subTitle="Silahkan tambahkan kelas"/> : <CardList apiData={apiData} deleteData={deleteData} handleEdit={handleEdit} idData={apiData} key={apiData.id} isButton={isButton} />
        }
        <div className='flex flex-col items-center justify-center gap-3'>
        {isButton || dataLama.length === 0 ? <Button className='w-96' type='primary' onClick={() => {
          setSelectedClass(null);
          setIsOpen(true);
          setIsAdd(true);
          setIsEditing(false);


          setTimeout(() => {
            form.resetFields(); //Pakai timeout untuk memastikan reset terjadi
          }, 0);


          }}>Tambah Kelas</Button> : ''}
          
        { dataLama[0] ? <Button 
            className='w-96' 
            type='primary' 
            style={{backgroundColor: isButton ? '' : 'red'}}
            onClick={() => {
              setShowButton(prev => !prev);
              setIsButton (prev => !prev);
              setIsEditing(false);

          }}>{isButton ? "Edit Kelas" : "Batal"}</Button> : '' 
        }
        </div>
        <BannerSec/>
        </div>
        <HomeFooter/>

    <Modal
    open={isOpen}
    title={isAdd ? 'Tambahkan Kelas' : 'Edit Kelas'}
    onCancel={() => closeModal()}
    footer={null}>
        <Form 
        form={form}
        style={{display: 'flex', flexDirection: 'column'}}
        onFinish={(e) => {
          console.log('DATA DITERIMA', e);
          
            saveData(e);
            closeModal();
            form.resetFields();
        }} >
            <Form.Item
                label='Judul Kelas'
                name='title'
                rules={[{
                    required: true,
                    message: 'Judul Kelas Tidak Boleh Kosong'
                }]} >
                    <Input maxLength={30}/>
            </Form.Item>
            <Form.Item
                label='Nama Lengkap'
                name='fullname'
                rules={[{
                    required: true,
                    message: 'Nama Lengkap Tidak Boleh Kosong'
                }]} >
                    <Input maxLength={25}/>
            </Form.Item>            
            <Form.Item
                label='Jabatan'
                name='job'
                rules={[{
                    required: true,
                    message: 'Jabatan Tidak Boleh Kosong'
                }]} >
                    <Input maxLength={20}/>
            </Form.Item>
            <Form.Item
                label='Perusahaan'
                name='company'
                rules={[{
                    required: true,
                    message: 'Perusahaan Tidak Boleh Kosong'
                }]} >
                    <Input maxLength={15}/>
            </Form.Item>
            <Form.Item
                label='Harga'
                name='price'
                rules={[{
                    required: true,
                    message: 'Harga Tidak Boleh Kosong'
                }]} >
                <InputNumber prefix='Rp ' suffix='K' maxLength={5}/>
            </Form.Item>
            <Form.Item label='Gambar' name='image'>
                <Select options={optionImg}/>
            </Form.Item>
            <Form.Item label='Avatar' name='avatar'>
                <Select options={optionAvatar}/>
            </Form.Item>

            <Form.Item  style={{display: 'flex', flexDirection:'column', alignItems:'end'}}>
                <Button style={{marginRight:'15px', backgroundColor: 'red'}} type='primary' onClick={() => closeModal()} >Batal</Button>
                <Button type='primary' htmlType='submit'>Simpan</Button>
            </Form.Item>

        </Form>
    </Modal>

      </>
    )
}

export default Home
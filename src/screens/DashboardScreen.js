import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const DashboardScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  console.log("image", image)

  const handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    launchImageLibrary(options, response => {
      console.log("response", response)
      if (response?.assets?.[0]?.uri) {
        setImage(response?.assets?.[0]?.uri)
      }
    })
  }
  // <TouchableOpacity onPress={handleChoosePhoto} style={{ borderRadius: 55, borderWidth: 2, borderColor: '#7DCEA0', padding: 1, flexDirection: 'row', }}>

  //   <EvilIcons name="user" size={120} color="white" style={{ position: 'absolute', padding: 10 }} />

  // </TouchableOpacity>
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: 'center', height: 50, justifyContent: 'center', backgroundColor: '#52BE80' }}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', color: 'white' }}>Dashboard</Text>
      </View>
      {/* <View style={{justifyContent:'center',flexGrow:1}}>
        <EvilIcons name="user" size={80} color="black" style={styles.imageview2}  />
      </View>   */}


      <View style={styles.detail}>

        {!image ?
          // <View style={{borderWidth:1,height:100,width:100,alignItems:'center',justifyContent:'center',borderRadius:100,backgroundColor:'grey',}}>
            <EvilIcons name="user" size={130} color="grey" onPress={handleChoosePhoto} style={{ }} />
  
          :
          <TouchableOpacity onPress={handleChoosePhoto} style={{ borderRadius: 55, borderWidth: 2, borderColor: '#7DCEA0', padding: 2, flexDirection: 'row' }}>
            <Image source={{ uri: image }} style={styles.imageview} />
          </TouchableOpacity>
        }

        <Text style={{ fontSize: 23, color: 'black', fontWeight: 'bold', marginTop: 10, }}> Abhay yadav</Text>
        <Text style={{ fontSize: 15 }}>@emailId</Text>

      </View>




      <View style={{ padding: 10, marginTop: 10, backgroundColor: "white", borderRadius: 10, marginTop: 60 }}>
        <View style={[styles.card, styles.shadowProp]}>
          <TouchableOpacity onPress={() => navigation.navigate('MyDetailScreen')}>
            <View style={{ flexDirection: 'row', padding: 3 }}>
              <View style={{ backgroundColor: '#E1E8ED', borderRadius: 7, justifyContent: 'center', width: 40, alignItems: 'center' }}>
                <MaterialIcons name="details" size={33} color="#34A56F" />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 10, padding: 8 }}>
                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>My Details</Text>

              </View>
              <View style={{ alignItems: 'flex-end', flexGrow: 1 }}>
                <FontAwesome name="angle-double-right" size={33} color="grey" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyDetailScreen')}>
            <View style={{ flexDirection: 'row', marginTop: 25, padding: 3 }}>
              <View style={{ backgroundColor: '#E1E8ED', borderRadius: 7, justifyContent: 'center', width: 40, alignItems: 'center' }}>
                <Entypo name="calendar" size={30} color="#34A56F" />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 10, padding: 8 }}>

                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Holiday Calender</Text>

              </View>
              <View style={{ alignItems: 'flex-end', flexGrow: 1 }}>
                <FontAwesome name="angle-double-right" size={33} color="grey" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyDetailScreen')}>
            <View style={{ flexDirection: 'row', marginTop: 25, padding: 3 }}>
              <View style={{ backgroundColor: '#E1E8ED', borderRadius: 7, justifyContent: 'center', width: 40, alignItems: 'center' }}>
                <Fontisto name="holiday-village" size={23} color="#34A56F" />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 10, padding: 8 }}>

                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>leave</Text>

              </View>
              <View style={{ alignItems: 'flex-end', flexGrow: 1 }}>
                <FontAwesome name="angle-double-right" size={33} color="grey" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyDetailScreen')}>
            <View style={{ flexDirection: 'row', marginTop: 25, padding: 3 }}>
              <View style={{ backgroundColor: '#E1E8ED', borderRadius: 7, justifyContent: 'center', width: 40, alignItems: 'center' }}>
                <MaterialCommunityIcons name="details" size={33} color="#34A56F" />
              </View>
              <View style={{ justifyContent: 'center', marginLeft: 10, padding: 8 }}>

                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Company Detail</Text>

              </View>
              <View style={{ alignItems: 'flex-end', flexGrow: 1 }}>
                <FontAwesome name="angle-double-right" size={33} color="grey" />
              </View>
            </View>
          </TouchableOpacity>

        </View>
      </View>

    </View >
  )

  //   return (
  //     <View style={{  flex: 1 }}>
  // {/* 
  //       <View style={styles.header}> */}

  //         {/* <Entypo name="menu" size={40} color="white" onPress={() => navigation.openDrawer()} /> */}
  //         {/* <View style={{ alignItems: 'center', flexGrow: 1, marginLeft: 37 }}>
  //           <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Welcome</Text>
  //         </View> */}

  //         {/* <View style={styles.icon}>
  //           <Feather name="camera" size={38} color="white" onPress={handleChoosePhoto} />
  //         </View>
  //       </View> */}

  // {/* 
  //       <View style={styles.detail}>
  //         <TouchableOpacity onPress={handleChoosePhoto}>
  //           <Image source={{ uri: image }} style={styles.imageview} />
  //         </TouchableOpacity>

  //         <Text style={{ fontSize: 30,color:'black', }}> Abhay</Text>
  //         <Text style={{ fontSize: 20}}>Your employee Id</Text>

  //       </View> */}

  //       {/* <View style={{padding:10}}>
  //         <View style={{ borderWidth: 1, height: 50, justifyContent: 'center' }}>
  //           <Text>HIII</Text>
  //         </View>
  //       </View> */}

  //       {/* <View style={{ flexDirection: 'row', padding: 20 }}>
  //         <View style={{height:50,width:80,backgroundColor:'red'}}>
  //           <Text>Height</Text>
  //         </View>

  //         <View style={{ alignItems: 'center', flexGrow: 1,height:50,width:80,backgroundColor:'red',marginLeft:2 }}>
  //           <Text>Weight</Text>
  //         </View>

  //         <View style={{ alignItems: 'flex-end',height:50,width:80,backgroundColor:'red',marginLeft:2 }}>
  //           <Text>Age</Text>
  //         </View>
  //       </View> */}


  //        {/* <View style={{ flexDirection: 'row', }}>
  //         <TouchableOpacity onPress={()=>navigation.navigate('MyDetailScreen')}>
  //           <View style={styles.Button}>
  //             <MaterialIcons name="details" size={38} color="#34A56F" />
  //             <Text style={{ color: '#34A56F', fontSize: 20 }}>My Details</Text>
  //           </View>
  //         </TouchableOpacity>

  //         <TouchableOpacity>
  //           <View style={styles.Button}>
  //             <Entypo name="calendar" size={40} color="#34A56F" />
  //             <Text style={{ color: '#34A56F', fontSize: 18 }}>Holiday Calender</Text>
  //           </View>
  //         </TouchableOpacity>
  //       </View>


  //       <View style={{ flexDirection: 'row', }}>
  //         <TouchableOpacity>
  //           <View style={styles.button2}>
  //             <Fontisto name="holiday-village" size={40} color="#34A56F" />
  //             <Text style={{ color: '#34A56F', fontSize: 20 }}>leave</Text>
  //           </View>

  //         </TouchableOpacity>
  //         <TouchableOpacity>
  //           <View style={styles.button2}>
  //             <MaterialCommunityIcons name="details" size={40} color="#34A56F" />
  //             <Text style={{ color: '#34A56F', fontSize: 20 }}>Company Detail</Text>
  //           </View>
  //         </TouchableOpacity>
  //      </View> */}
  //     </View>
  //   )
}

export default DashboardScreen

const styles = StyleSheet.create({
  // icon: {
  //   flexGrow: 1, alignItems: 'flex-end',
  // },
  detail: {
    alignItems: 'center', marginTop: 40, justifyContent: 'center'
  },
  // Button: {
  //   alignItems: 'center', height: 150, width: 150, backgroundColor: 'white', alignItems: 'center', flexGrow: 1,
  //   justifyContent: 'center', marginLeft: 2, marginTop: 20,
  //   marginLeft: 20, borderRadius: 10
  // },
  // button2: {
  //   alignItems: 'center', height: 150, width: 150, backgroundColor: 'white', alignItems: 'center', flexGrow: 1,
  //   justifyContent: 'center', marginLeft: 2, marginTop: 20,
  //   marginLeft: 20, borderRadius: 10
  // },
  imageview: {
    width: 80, height: 80, borderRadius: 80, backgroundColor: '#B3B6B7',
  },
  imageview2: {
    width: 100, height: 100, borderRadius: 80, backgroundColor: '#B3B6B7', justifyContent: 'center', alignItems: 'center',
  },
  // header: {
  //   flexDirection: 'row', height: 180, padding: 10,
  // },
  card: {
    backgroundColor: 'white',
    // marginTop: 50,
    borderRadius: 8,


    // paddingVertical: 45,
    // paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 15,

  },
})
import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { CookiesProvider,useCookies } from 'react-cookie';
const drawerBleeding = 0;

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };

  export default function SimpleDialog(props) {
    const [cookies, setCookies] = useCookies(['id']);
    const[learning,setLearning]=React.useState(0);
    const[travel,setTravel]=React.useState(0);
    const[art,setArt]=React.useState(0);
    const[sports,setSports]=React.useState(0);
    const[foods,setFoods]=React.useState(0);
    const[walk,setWalk]=React.useState(0);
    const[chronic,setChronic]=React.useState(0);
    const[breathe,setBreathe]=React.useState(0);
    const[surprised,setSurprised]=React.useState(0);
    const[people,setPeople]=React.useState(0);
    const[diet,setDiet]=React.useState(0);
    const[fin,setFin]=React.useState(0);
    const [chan, setChan] = React.useState(false);
  const { onClose, selectedValue, open } = props;
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value) => {
    onClose(value);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen2(newOpen);
  };
  const toggleDrawer2 = (newOpen) => () => {
    setOpen3(newOpen);
  };
  React.useEffect(function () {
    fetch("http://localhost:8080/activity/preference", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({login_id: cookies.id}),
              }).then(async (response) => {
                const data = await response.json()
                setLearning(data.learn)
                setTravel(data.travel)
                setArt(data.art)
                setSports(data.sports)
                setFoods(data.foods)
                setWalk(data.walk)
                setChronic(data.chronic)
                setBreathe(data.breathe)
                setSurprised(data.surprised)
                setPeople(data.people)
                setDiet(data.diet)
                setFin(1)
                console.log(diet)
              })
  }, [chan])
  return (
    <div>
        <SwipeableDrawer
        anchor="bottom"
        open={open2}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className='boarding'>
            <div style={{paddingTop:"40px"}}>
            <div className='graynum'>
                1/2
            </div>
            <div className='plzslect'>{cookies.name}???,<br/><b style={{color:"#FF31DE"}}>???????????? ??????</b>??? ???????????????</div>
            <div className='bubblelist'>
            <div
        key="0"
        onClick={
        function(){
            fetch("http://localhost:8080/alter/changing", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({id:cookies.id, column : "learn" }),
              }).then(async (res) => {
                const data = await res.json()
                setLearning(data["learn"])
                setChan(!chan)
              })

            learning?setLearning(0):setLearning(1)
        }}
        className={'likebox-'+(learning?"yes":"no")}
        >
            ????????? ??? ?????????
        </div>
        <div
        key="1"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "travel" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setTravel(data["travel"])
                    setChan(!chan)
                  })
    
                travel?setTravel(0):setTravel(1)
            }}
        className={'likebox-'+(travel?"yes":"no")}
        >????????????
        </div>
        <div
        key="2"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "art" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setArt(data["art"])
                    setChan(!chan)
                  })
    
                art?setArt(0):setArt(1)
            }}
        className={'likebox-'+(art?"yes":"no")}
        >?????? ????????????
        </div>
        <div
        key="3"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "sports" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setSports(data["sports"])
                    setChan(!chan)
                  })
    
                sports?setSports(0):setSports(1)
            }}
        className={'likebox-'+(sports?"yes":"no")}
        >????????????
        </div>
        <div
        key="4"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "foods" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setFoods(data["foods"])
                    setChan(!chan)
                  })
    
                foods?setFoods(0):setFoods(1)
            }}
        className={'likebox-'+(foods?"yes":"no")}
        >????????? ?????? ??????
        </div>
            </div>
            <div className='next' onClick={toggleDrawer2(true)}>??????</div>
            </div>
        </div>
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="bottom"
        open={open3}
        onClose={toggleDrawer2(false)}
        onOpen={toggleDrawer2(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className='boarding'>
            <div style={{paddingTop:"40px"}}>
            <div className='graynum'>
                2/2
            </div>
            <div className='plzslect'>{cookies.name}???,<br/><b style={{color:"#FF31DE"}}>????????????</b>??? ???????????????</div>
            <div className='bubblelist'>
            <div
        key="5"
        onClick={
        function(){
            fetch("http://localhost:8080/alter/changing", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({id:cookies.id, column : "walk" }),
              }).then(async (res) => {
                const data = await res.json()
                setWalk(data["walk"])
                setChan(!chan)
              })

            walk?setWalk(0):setWalk(1)
        }}
        className={'likebox-'+(walk?"yes":"no")}
        >
            ?????? ????????????
        </div>
        <div
        key="6"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "chronic" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setChronic(data["chronic"])
                    setChan(!chan)
                  })
    
                chronic?setChronic(0):setChronic(1)
            }}
        className={'likebox-'+(chronic?"yes":"no")}
        >??????????????? ?????????
        </div>
        <div
        key="7"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "diet" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setDiet(data["diet"])
                    setChan(!chan)
                  })
    
                diet?setDiet(0):setDiet(1)
            }}
        className={'likebox-'+(diet?"yes":"no")}
        >??????????????? ????????????
        </div>
        <div
        key="8"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "breathe" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setBreathe(data["breathe"])
                    setChan(!chan)
                  })
    
                breathe?setBreathe(0):setBreathe(1)
            }}
        className={'likebox-'+(breathe?"yes":"no")}
        >?????? ?????? ??????
        </div>
        <div
        key="9"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "surprised" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setSurprised(data["surprised"])
                    setChan(!chan)
                  })
    
                surprised?setSurprised(0):setSurprised(1)
            }}
        className={'likebox-'+(surprised?"yes":"no")}
        >????????? ?????????
        </div>
        <div
        key="10"
        onClick={
            function(){
                fetch("http://localhost:8080/alter/changing", {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({id:cookies.id, column : "people" }),
                  }).then(async (res) => {
                    const data = await res.json()
                    setPeople(data["people"])
                    setChan(!chan)
                  })
    
                people?setPeople(0):setPeople(1)
            }}
        className={'likebox-'+(people?"yes":"no")}
        >????????? ???????????? ????????? ??????????????????
        </div>
            </div>
            <div className='pre_next'>
            <div className='pre' onClick={toggleDrawer2(false)}>??????</div>
            <div style={{width:"10px"}}></div>
            <div className='next2' onClick={()=>{
                setOpen2(false)
                setOpen3(false)
            }}>??????</div>
            </div>
            </div>
        </div>
      </SwipeableDrawer>
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <div className='wouldDialog'>
        <div style={{position:"absolute",right:"15px"}} onClick={handleListItemClick}><ClearIcon/></div>
        <div className='wouldyou'>
            <b style={{color:"#FF31DE"}}>{cookies.name}</b>??? ????????????
            <br/>
             ?????? ???????????????????
        </div>
        <div style={{marginBottom:"20px"}}></div>
        <div className='wouldno'><div>?????????</div></div>
        <div className='wouldyes'
        onClick={()=>{
            
                onClose(selectedValue);
                setOpen2(true)
        }}>???!</div>
        </div>
        </DialogTitle>
    </Dialog>
    </div>
  );
}

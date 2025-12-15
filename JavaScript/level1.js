async function getFileSize(url) {
  try {
    const response = await fetch(url);
    const contentLength = response.headers.get('Content-Length');
    
    if (!contentLength) {
      return true
    }else{
      return false
    }
  } catch (error) {
    console.error('Error fetching file size:', error);
    return false;
  }
}

async function load(i) {
  const data = await getFileSize(`https://nietcloud.niet.co.in/downloadStudentResultForNiet.json?examSchdId=${i}&semesterId=2&institueCourseId=19`);
  if(data){
    console.log(`https://nietcloud.niet.co.in/downloadStudentResultForNiet.json?examSchdId=${i}&semesterId=2&institueCourseId=14`);
    window.open(`https://nietcloud.niet.co.in/downloadStudentResultForNiet.json?examSchdId=${i}&semesterId=2&institueCourseId=19`,"_blank")
  }
}

for(let i=0;i<200;i++){
  load(i);
}
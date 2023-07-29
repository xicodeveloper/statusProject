const allTitlesPipeline = [
    { $project: { title: "$member_name", _id: 0 } },
    { $group: { _id: null, titles: { $push: "$title" } } }
  ];
  
  const reportsTitlesPipeline = [
    { $project: { title: 1, _id: 0 } }
  ];
  
  const glosTitlesPipeline = [
    { $project: { title: "$word", _id: 0 } }
  ];
  
  const newsTitlesPipeline = [
    { $project: { title: 1, _id: 0 } }
  ];
  
  const evTitlesPipeline = [
    { $project: { title: 1, _id: 0 } }
  ];
  
  const [allTitlesResult, reportsTitles, glosTitles, newsTitles, evTitles] = await Promise.all([
    Members.aggregate(allTitlesPipeline).exec(),
    Reports.aggregate(reportsTitlesPipeline).exec(),
    Gloss.aggregate(glosTitlesPipeline).exec(),
    News.aggregate(newsTitlesPipeline).exec(),
    Events.aggregate(evTitlesPipeline).exec()
  ]);
  
  const allTitlesArray = allTitlesResult.length > 0 ? allTitlesResult[0].titles : [];
  const reportsTitlesArray = reportsTitles.map(item => item.title);
  const glosTitlesArray = glosTitles.map(item => item.title);
  const newsTitlesArray = newsTitles.map(item => item.title);
  const evTitlesArray = evTitles.map(item => item.title);
  
  const allTitlesJSON = {
    allTitles: allTitlesArray,
    reportsTitles: reportsTitlesArray,
    glosTitles: glosTitlesArray,
    newsTitles: newsTitlesArray,
    evTitles: evTitlesArray
  };
  
  console.log(allTitlesJSON);
  
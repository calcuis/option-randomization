{item.a&&((item.d && swap==2)?<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>:(swap==1?<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>:<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>))}
{item.b&&(swap==1?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:<li><input type="radio" value="b" name="choice" /> {item.b}{values.choice==item.ans && item.ans=="b" &&"✔️"}</li>)}
{item.c&&((item.d && swap==2)?<li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>:<li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>)}
{item.d&&<li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>}



 
phpinfo();
$url = "https://api.affiliates.one/api/v1/affiliates/products.xml?api_key=48b57ca83b75164ddddb9b3358b35fe5&offer_id=2377";

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HEADER, 1);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); //這個是重點,規避ssl的證書檢查。
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE); // 跳過host驗證
$data = curl_exec($curl);
curl_close($curl);
var_dump($data);
   

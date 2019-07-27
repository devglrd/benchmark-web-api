# BenchMakrk of web Api

RESULTS BENCHMARK

 #### LARAVEL
    8CPU 32GO RAM | 1000 connexion |  30sec
  - SIMPLE HELLO WOLRD =
    - `31435 requests in 30.05s, 57.92MB read`
    - `Requests/sec:   1046.15`
    -  Thread Stats   Avg      Stdev     Max   +/- Stdev
    -   Latency   129.58ms   51.76ms   1.99s    97.16%
    -   Req/Sec   132.57     61.81   776.00     61.20%
 - LIST 1000 USERS = 
    - `30764 requests in 30.10s, 70.05MB read`
    - `Requests/sec:   1022.21`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency   138.58ms   91.44ms   1.99s    98.78%
    - Req/Sec   128.97     46.36   404.00     67.17%


#### SYMFONY
    8CPU 32GO RAM | 1000 connexion |  30sec
  - SIMPLE HELLO WORLD = 
    - `9582 requests in 30.10s, 3.60MB read`
    - `Requests/sec:    318.37`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency   558.48ms  391.75ms   1.98s    85.70%
    -  Req/Sec    44.04     33.15   390.00     66.90%
- LIST 1000 USERS=
    - `1287 requests in 30.10s, 334.14MB read`
    - `Requests/sec:     42.76`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency   666.70ms  636.08ms   1.96s    68.04%
    - Req/Sec    10.15     10.74   111.00     93.88%

#### SYMFONY WITH PROD MODE
    8CPU 32GO RAM | 1000 connexion |  30sec
  - SIMPLE HELLO WORLD = 
    - `Requests/sec:   1389.56`
    - `41816 requests in 30.09s, 11.49MB read`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency    98.56ms   58.93ms   1.95s    95.89%
    - Req/Sec   175.49     85.13   810.00     65.61%
- LIST 1000 USERS=
    - `Requests/sec:     52.63`
    - `1583 requests in 30.08s, 347.31MB read`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency   938.95ms  625.94ms   1.98s    56.36%
    - Req/Sec    12.28     12.93   161.00     88.35%


#### NODE API WITH TYPEORM
    8CPU 32GO RAM | 1000 connexion |  30sec
  - SIMPLE HELLO WORLD =
    - `332926 requests in 30.07s, 153.35MB read`
    - `Requests/sec:  11072.89`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency    87.47ms   54.06ms   1.19s    97.75%
    - Req/Sec     1.45k   448.04     3.72k    79.55%
- LIST 1000 USERS=
    - `2112 requests in 30.09s, 347.07MB read`
    - `Requests/sec:     70.19`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency     1.41s   505.68ms   2.00s    69.30%
    - Req/Sec    12.76      9.56    80.00     80.45%

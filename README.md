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
 - LIST 10 USERS = 
    - `22559 requests in 30.09s, 53.37MB read`
    - `Requests/sec:    749.78`
    -   Non-2xx or 3xx responses: 87
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency   138.58ms   91.44ms   1.99s    98.78%
    - Req/Sec   128.97     46.36   404.00     67.17%


#### SYMFONY WITH PROD MODE
    8CPU 32GO RAM | 1000 connexion |  30sec
- SIMPLE HELLO WORLD = 
    - `41816 requests in 30.09s, 11.49MB read`
    - `Requests/sec:   1389.56`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency    98.56ms   58.93ms   1.95s    95.89%
    - Req/Sec   175.49     85.13   810.00     65.61%
- LIST 10 USERS=
    - `20255 requests in 30.08s, 47.11MB read`
    - `Requests/sec:    673.27`
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
- LIST 10 USERS=
    - ` 197476 requests in 30.06s, 337.72MB read`
    - `Requests/sec:   6568.62`
    - Thread Stats   Avg      Stdev     Max   +/- Stdev
    - Latency   200.16ms   69.11ms   1.93s    96.88%
    - Req/Sec    89.13     76.55   430.00     73.93%

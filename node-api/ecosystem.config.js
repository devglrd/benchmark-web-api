module.exports = {
  apps : [{
    name   : "node-api",
    script : "./build/index.js",
    instances   : "max",
    ignore_watch: ["node_modules"],
    exec_mode   : "cluster",
    node_args: "--max_old_space_size=8192"
  }]
}

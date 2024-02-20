const watcher = Deno.watchFs(".");
for await (const event of watcher) {
    console.log(event.paths[0])
//   console.log(">>>> event", event);
  // Example event: { kind: "create", paths: [ "/home/alice/deno/foo.txt" ] }
}

// deno run --allow-read source/watch.ts | % { Resolve-Path $_ } | % { deno run $_ }
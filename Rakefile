task :default do 
  sh "node index.js"
end

task :download do 
  %w{std pale blank label llabel std2 pale2 blank2}.each {|t|
    sh "curl -o src/#{t}.json https://maps.gsi.go.jp/vector/data/#{t}.json"
  }
end

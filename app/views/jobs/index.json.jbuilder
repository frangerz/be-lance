json.array!(@jobs) do |job|
  json.extract! job, :id, :quote, :alert_at, :duration, :cost_per_hour
  json.url job_url(job, format: :json)
end

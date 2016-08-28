json.array!(@reviews) do |review|
  json.extract! review, :id, :stars, :speed, :quality, :experience, :comfort, :description, :title
  json.url review_url(review, format: :json)
end

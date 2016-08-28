json.array!(@users) do |user|
  json.extract! user, :id, :firstname, :surname, :dob, :uuid, :scope, :admin, :status
  json.url user_url(user, format: :json)
end

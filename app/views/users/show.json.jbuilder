json.(@user, :id, :firstname, :surname, :dob, :uuid, :scope, :admin, :status, :created_at, :updated_at)

json.services @user.services do |json, serv|
  json.(serv , :id, :location, :title, :description, :experience, :materials)
end

json.reviews @user.reviews do |json, review|
  json.(review, :id, :stars, :soreed, :quality, :experience, :comfort, :description, :title)
end

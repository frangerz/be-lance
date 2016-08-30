class AddFieldsToDetail < ActiveRecord::Migration
  def change
    add_column :details, :mobile, :string
    add_column :details, :home_phone, :string
    add_column :details, :alternate_email, :string
    add_column :details, :address, :string
    add_column :details, :latitude, :float
    add_column :details, :longitude, :float
    add_column :details, :status, :boolean
  end
end

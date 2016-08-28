class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :surname
      t.date :dob
      t.string :uuid
      t.string :scope
      t.boolean :admin
      t.string :status
      t.string :email
      password_hash :string
      password_salt :string

      t.timestamps null: false
    end
  end
end

<?php
declare(strict_types=1);

namespace App\Model\Entity;

use Cake\Auth\DefaultPasswordHasher; // Add this line
use Cake\ORM\Entity;

/**
 * User Entity
 *
 * @property int $id
 * @property string|null $name
 * @property string|null $family
 * @property string|null $email
 * @property string|null $password
 * @property \Cake\I18n\FrozenTime|null $created_at
 * @property \Cake\I18n\FrozenTime|null $updated_at
 */
class User extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array<string, bool>
     */
    protected $_accessible = [
        'name' => true,
        'family' => true,
        'email' => true,
        'password' => true,
        'created_at' => true,
        'updated_at' => true,
    ];

    /**
     * Fields that are excluded from JSON versions of the entity.
     *
     * @var array<string>
     */
    protected $_hidden = [
        'password',
    ];

    protected function _setPassword($value)
    {
        if (strlen($value)) {
            $hasher = new DefaultPasswordHasher();

            return $hasher->hash($value);
        }
    }
}

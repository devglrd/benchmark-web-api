<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class Controller extends AbstractController
{
    /**
     * @Route("/api", name="api")
     */
    public function index()
    {
        return $this->json([
            "status"  => 200,
            "message" => "Hello World"
        ]);
    }
    
    /**
     * @Route("/api/users", name="users")
     */
    public function getUsers()
    {
    
        $users = $this->getDoctrine()
            ->getRepository(User::class)
            ->findAll();
        
        return $this->json([
            "data" => $users
        ]);
    }
}
